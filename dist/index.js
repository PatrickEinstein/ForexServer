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
import RegisterRouter from "./Routes/Register.js";
import LoginRouter from "./Routes/Login.js";
import createChapterRouter from "./Routes/CreateChapter.js";
import CreateCourseRouter from "./Routes/CreateCourse.js";
import getAllCoursesRouter from "./Routes/GetAllCourses.js";
import GetCourseAndChaptersRouter from "./Routes/GetCourseAndChapters.js";
import DeleteCourseRouter from "./Routes/DeleteCourse.js";
import DeleteChapterRouter from "./Routes/DeleteChapter.js";
import PelPayWebhookRouter from "./Routes/PelPayWebhook.js";
import LoginWithGoogleRouter from "./Routes/LoginWithGoogle.js";
import TokenVerification from "./Middlewares/TokenVerification.js";
import GetUserRegisteredCoursesRouter from "./Routes/GetUserRegisteredCourses.js";
import FindTransactionbyIdRouter from "./Routes/FindTransactionbyId.js";
import GetUserByIdRouter from "./Routes/GetUserById.js";
import VerifyOtpRouter from "./Routes/VerifyOTP.js";
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
    // ManuallyCreateUser(profile._json);
};
passport.use(new Strategy(StrategyOptions, verifyCallback));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((obj, done) => {
    done(null, obj);
});
///////////////////////////
// GENERAL
app.use("/", getAllNewsRouter);
app.use("/", getAllVideosRouter);
app.use("/", getAllAnalysesRouter);
app.use("/", getAllThreadsRouter);
app.use("/", getAllCoursesRouter);
app.use("/", VerifyOtpRouter);
////////////////////////
////////////////////////////////
// AUTHENTICATION
app.use("/", RegisterRouter);
app.use("/", LoginRouter);
app.use("/", LoginWithGoogleRouter);
////////////////////////////
//PAYMENTS WEBHOOKS
app.use("/", paywithPayPalExecuteRouter);
app.use("/", stripeCallbackUrlRouter);
app.use("/", PelPayWebhookRouter);
////////////////////////////////
//////////////////////////
// PAYMENTS ENDPOINTS
app.use("/", TokenVerification, paywithPelPayRouter);
app.use("/", TokenVerification, paywithPayPalRouter);
app.use("/", TokenVerification, paywithStripeCreateRouter);
app.use("/", TokenVerification, paywithStripeEditableCreateRouter);
////////////////////////
//////////////////////////
app.use("/", TokenVerification, CreateAnalysisRouter);
app.use("/", TokenVerification, CreateForumRouter);
app.use("/", TokenVerification, CreateReplyRouter);
app.use("/", TokenVerification, CreateNewsRouter);
app.use("/", TokenVerification, DeleteAnalysisRouter);
app.use("/", TokenVerification, DeleteForumRouter);
app.use("/", TokenVerification, DeleteNewsRouter);
app.use("/", TokenVerification, DeleteReplyRouter);
app.use("/", TokenVerification, GetAnAnalysisRouter);
app.use("/", TokenVerification, GetAnNewsRouter);
app.use("/", TokenVerification, GetAVideoRouter);
app.use("/", TokenVerification, GetAThreadRouter);
app.use("/", TokenVerification, UpdateAnalysisRouter);
app.use("/", TokenVerification, UpdateForumRouter);
app.use("/", TokenVerification, UpdateNewsRouter);
app.use("/", TokenVerification, UpdateReplyRouter);
app.use("/", TokenVerification, UpdateVideoRouter);
app.use("/", TokenVerification, createChapterRouter);
app.use("/", TokenVerification, CreateCourseRouter);
app.use("/", TokenVerification, GetCourseAndChaptersRouter);
app.use("/", TokenVerification, DeleteCourseRouter);
app.use("/", TokenVerification, DeleteChapterRouter);
app.use("/", TokenVerification, GetUserRegisteredCoursesRouter);
app.use("/", TokenVerification, FindTransactionbyIdRouter);
app.use("/", TokenVerification, GetUserByIdRouter);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri = process.env.DB_URI ? process.env.DB_URI : "";
ConnectDatabse(app, PORT, uri);
