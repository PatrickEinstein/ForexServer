import express from "express";
import createPaymentPayPal from "../controller/PayPal/createPaymentPayPal.js";
import executePaymentPayPal from "../controller/PayPal/executePaymentPaypal.js";
let paywithPayPalCreateRouter = express.Router();
paywithPayPalCreateRouter.post("/api/paypal/create", createPaymentPayPal);
paywithPayPalRouter.post("/api/paypal/execute", executePaymentPayPal);
export default paywithPayPalCreateRouter;
