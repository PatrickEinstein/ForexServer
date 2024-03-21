import { RequestHandler } from "express";
import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const endpointSecret =
  "whsec_0a509d470f0d51f9131a0ef945399a7aa5d5ce127078f79d89a75c6a42e62ca0";
const callBackUrlStripe: RequestHandler = (req, res) => {
  const sig = req.headers["stripe-signature"] ?? "";
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;
      console.log(`PaymentIntentSuccess:::`, paymentIntent);
      break;
    case "payment_intent.payment_failed":
      const paymentFailedIntent = event.data.object;

      console.log(`payment_intent.payment_failed:::`, paymentFailedIntent);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).end();
};
export default callBackUrlStripe;
