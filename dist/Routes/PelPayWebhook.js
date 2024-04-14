import express from "express";
import PelPayWebhook from "../controller/PelPay/PelPayWebhook.js";
const PelPayWebhookRouter = express.Router();
PelPayWebhookRouter.get("/api/pelpaycallback", PelPayWebhook);
export default PelPayWebhookRouter;
