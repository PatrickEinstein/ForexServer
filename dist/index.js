import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import ConnectDatabse from "./config/Database.js";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./config/SwaggerUiDocs.js";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import { Strategy, } from "passport-google-oauth20";
dotenv.config();
import { Server } from "socket.io";
import upload from "./config/Multer.js";
import getAllAnalysesRouter from "./Routes/GetAllAnalyses.js";
import CreateAnalysisRouter from "./Routes/CreateAnalysis.js";
import CreateForumRouter from "./Routes/CreateForum.js";
import CreateReplyRouter from "./Routes/CreateReply.js";
import CreateNewsRouter from "./Routes/CreateNews.js";
import paywithPelPayRouter from "./Routes/PaywithPelPay.js";
import paywithPayPalRouter from "./Routes/paywithPayPalCreateRouter.js";
import paywithPayPalExecuteRouter from "./Routes/paywithPayPalExxecuteRouter.js";
import paywithStripeCreateRouter from "./Routes/paywithStripeCreateRouter.js";
import paywithStripeEditableCreateRouter from "./Routes/paywithStripeEditableCreateRouter.js";
import stripeCallbackUrlRouter from "./Routes/stripeCallbackUrl.js";
import getAllThreadsRouter from "./Routes/GetAllThreads.js";
import getAllNewsRouter from "./Routes/GetAllNews.js";
import getAllVideosRouter from "./Routes/GetAllVideos.js";
import DeleteAnalysisRouter from "./Routes/DeleteAnalysis.js";
import DeleteForumRouter from "./Routes/DeleteForum.js";
import DeleteNewsRouter from "./Routes/DeleteNews.js";
import DeleteReplyRouter from "./Routes/DeleteReply.js";
import GetAnAnalysisRouter from "./Routes/GetAnAnalysis.js";
import GetAnNewsRouter from "./Routes/GetANews.js";
import GetAVideoRouter from "./Routes/GetAVideo.js";
import GetAThreadRouter from "./Routes/GetThread.js";
import UpdateAnalysisRouter from "./Routes/UpdateAnalysis.js";
import UpdateForumRouter from "./Routes/UpdateForum.js";
import UpdateNewsRouter from "./Routes/UpdateNews.js";
import UpdateReplyRouter from "./Routes/UpdateReply.js";
import UpdateVideoRouter from "./Routes/UpdateVideo.js";
import helmet from "helmet";
import TokenVerification from "./Middlewares/TokenVerification.js";
import RegisterRouter from "./Routes/Register.js";
import LoginRouter from "./Routes/Login.js";
import LoginWithGoogleRouter from "./Routes/LoginWithGoogle.js";
import createChapterRouter from "./Routes/CreateChapter.js";
import CreateCourseRouter from "./Routes/CreateCourse.js";
import getAllCoursesRouter from "./Routes/GetAllCourses.js";
import GetCourseAndChaptersRouter from "./Routes/GetCourseAndChapters.js";
const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);
console.log(__dirname);
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(upload.any()); //THIS IS MULTER JUST IN CASE I WILL BE NEEDING IT
const io = new Server(8050, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT"],
    },
});
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerconfig));
app.get("/api/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerconfig);
});
app.get("/", (req, res) => {
    res.json("WELCOME");
});
const pathTofile = decodeURIComponent(path.join(__dirname, "controller", "Stripe", "createPaymentStripe.html"));
app.get("/stripe", (req, res) => {
    res.sendFile(pathTofile);
});
app.get("/failed", (req, res) => {
    res.send("FAILED");
});
const AUTH_OPTIONs = {
    COOKIE_KEY_1: process.env.COOKIE_KEY_1 || "",
    COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
const StrategyOptions = {
    callbackURL: "/auth/google/callback",
    clientID: process.env.G_client_id || "",
    clientSecret: process.env.G_client_secret || "",
    passReqToCallback: true,
};
const FBStrategyOptions = {
    callbackURL: "/auth/google/callback",
    clientID: process.env.G_client_id || "",
    clientSecret: process.env.G_client_secret || "",
    passReqToCallback: false,
};
const verifyCallback = (req, accessToken, refreshToken, profile, done) => {
    done(null, profile);
};
passport.use(new Strategy(StrategyOptions, verifyCallback));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});
const checkLoggedIn = (req, res, next) => {
    const isLoggedIn = req.isAuthenticated() && req.user;
    if (!isLoggedIn) {
        return res.status(401).json({
            error: "You must be logged in by Google or mail",
        });
    }
    const token = TokenVerification();
    next();
};
app.use("/", LoginWithGoogleRouter);
app.use("/", CreateAnalysisRouter);
app.use("/", CreateForumRouter);
app.use("/", CreateReplyRouter);
app.use("/", CreateNewsRouter);
app.use("/", getAllAnalysesRouter);
app.use("/", paywithPelPayRouter);
app.use("/", paywithPayPalRouter);
app.use("/", paywithPayPalExecuteRouter);
app.use("/", paywithStripeCreateRouter);
app.use("/", paywithStripeEditableCreateRouter);
app.use("/", stripeCallbackUrlRouter);
app.use("/", getAllThreadsRouter);
app.use("/", RegisterRouter);
app.use("/", LoginRouter);
app.use("/", getAllNewsRouter);
app.use("/", getAllVideosRouter);
app.use("/", DeleteAnalysisRouter);
app.use("/", DeleteForumRouter);
app.use("/", DeleteNewsRouter);
app.use("/", DeleteReplyRouter);
app.use("/", GetAnAnalysisRouter);
app.use("/", GetAnNewsRouter);
app.use("/", GetAVideoRouter);
app.use("/", GetAThreadRouter);
app.use("/", UpdateAnalysisRouter);
app.use("/", UpdateForumRouter);
app.use("/", UpdateNewsRouter);
app.use("/", UpdateReplyRouter);
app.use("/", UpdateVideoRouter);
app.use("/", createChapterRouter);
app.use("/", CreateCourseRouter);
app.use("/", getAllCoursesRouter);
app.use("/", GetCourseAndChaptersRouter);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri = process.env.DB_URI ? process.env.DB_URI : "";
ConnectDatabse(app, PORT, uri);
