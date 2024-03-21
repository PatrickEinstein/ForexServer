import express from "express";
import http from "http";
import cors from "cors";
import path from "path";
import ConnectDatabse from "./config/Database.js";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./config/SwaggerUiDocs.js";
import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import upload from "./config/Multer.js";
import getAllAnalysesRouter from "./Routes/GetAllAnalyses.js";
import CreateAnalysisRouter from "./Routes/CreateAnalysis.js";
import CreateForumRouter from "./Routes/CreateForum.js";
import CreateReplyRouter from "./Routes/CreateReply.js";
import CreateNewsRouter from "./Routes/CreateNews.js";
import CreateVideoRouter from "./Routes/CreateVideo.js";
import paywithPelPayRouter from "./Routes/PaywithPelPay.js";
import paywithPayPalRouter from "./Routes/paywithPayPalCreateRouter.js";
import paywithPayPalExecuteRouter from "./Routes/paywithPayPalExxecuteRouter.js";
import paywithStripeCreateRouter from "./Routes/paywithStripeCreateRouter.js";
import paywithStripeEditableCreateRouter from "./Routes/paywithStripeEditableCreateRouter.js";
import stripeCallbackUrlRouter from "./Routes/stripeCallbackUrl.js";
import getAllThreadsRouter from "./Routes/GetAllThreads.js";
import getAllNewsRouter from "./Routes/GetAllNews.js";
import getAllVideosRouter from "./Routes/GetAllVideos.js";
const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname).slice(1);
console.log(__dirname);
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
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
app.use("/", CreateAnalysisRouter);
app.use("/", CreateForumRouter);
app.use("/", CreateReplyRouter);
app.use("/", CreateNewsRouter);
app.use("/", CreateVideoRouter);
app.use("/", getAllAnalysesRouter);
app.use("/", paywithPelPayRouter);
app.use("/", paywithPayPalRouter);
app.use("/", paywithPayPalExecuteRouter);
app.use("/", paywithStripeCreateRouter);
app.use("/", paywithStripeEditableCreateRouter);
app.use("/", stripeCallbackUrlRouter);
app.use("/", getAllThreadsRouter);
app.use("/", getAllNewsRouter);
app.use("/", getAllVideosRouter);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri = process.env.DB_URI ? process.env.DB_URI : "";
ConnectDatabse(app, PORT, uri);
