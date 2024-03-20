import express from "express";
import createPaymentPayPal from "../controller/PayPal/createPaymentPayPal.js";


let paywithPayPalCreateRouter = express.Router();










paywithPayPalCreateRouter.post("/api/paypal/create", createPaymentPayPal);

export default paywithPayPalCreateRouter;
