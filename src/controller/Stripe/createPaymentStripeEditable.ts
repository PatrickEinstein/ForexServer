import { RequestHandler } from "express";
import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripeClient = new stripe(
  "sk_test_51OwPAMK45KhpmomBXC5EUYCBb9xJ8YT4lVZBlLNmQ0vKJfv5OoivlGBObeS8XVcBUxRcL4ICo7QVfw7PUCq1JvLf00HOvD7XWs"
);

const createPaymentStripeEditable: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);
    const { amount, token } = req.body;
    const charge = await stripeClient.charges.create({
      amount,
      currency: "usd",
      source: token,
      description: "Charge for test@example.com",
    });

    res.json({
      charge: charge,
    });
  } catch (error: any) {
    console.error("Error processing payment:", error.message);
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
};

export default createPaymentStripeEditable;
