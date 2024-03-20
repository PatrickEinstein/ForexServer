import express from "express";
import createPaymentStripe from "../controller/Stripe/createPaymentStripe.js";

const paywithStripeCreateRouter = express.Router();

paywithStripeCreateRouter.post("/api/stripe/create", createPaymentStripe);

export default paywithStripeCreateRouter;
