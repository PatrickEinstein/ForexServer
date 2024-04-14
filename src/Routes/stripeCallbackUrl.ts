import express from "express";
import callBackUrlStripe from "../controller/Stripe/callBackUrl.js";

const stripeCallbackUrlRouter = express.Router();

stripeCallbackUrlRouter.post(
  "/api/stripe/callbackUrl/",
  express.raw({type: 'application/json'}),
  callBackUrlStripe
);

export default stripeCallbackUrlRouter;
