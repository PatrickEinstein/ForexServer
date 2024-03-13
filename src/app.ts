import express, { Request, Response, NextFunction, response } from "express";
import http from "http";
import cors from "cors";
import ConnectDatabse from "./config/Database.js";
import swaggerUi from "swagger-ui-express";
import swaggerconfig from "./config/SwaggerUiDocs.js";
import { Server } from "socket.io";
import upload from "./config/Multer.js";
import getAllAnalysesRouter from "./Routes/GetAllAnalyses.js";
import CreateAnalysisRouter from "./Routes/CreateAnalysis.js";
import CreateForumRouter from "./Routes/CreateForum.js";
import CreateReplyRouter from "./Routes/CreateReply.js";
import CreateNewsRouter from "./Routes/CreateNews.js";
import CreateVideoRouter from "./Routes/CreateVideo.js";

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
app.use("/", CreateAnalysisRouter);
app.use("/", CreateForumRouter);
app.use("/", CreateReplyRouter);
app.use("/", CreateNewsRouter);
app.use("/", CreateVideoRouter);
app.use("/", getAllAnalysesRouter);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const uri: string = process.env.DB_URI ? process.env.DB_URI : "";

ConnectDatabse(app, PORT, uri);
