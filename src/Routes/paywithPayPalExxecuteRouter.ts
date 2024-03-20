import express from "express";
import executePaymentPayPal from "../controller/PayPal/executePaymentPaypal.js";

const paywithPayPalExecuteRouter = express.Router();

paywithPayPalExecuteRouter.get("/api/paypal/execute", executePaymentPayPal);

export default paywithPayPalExecuteRouter;
