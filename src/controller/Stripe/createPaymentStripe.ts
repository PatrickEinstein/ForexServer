import { RequestHandler } from "express";
import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripeClient = new stripe(
  "sk_test_51OwPAMK45KhpmomBXC5EUYCBb9xJ8YT4lVZBlLNmQ0vKJfv5OoivlGBObeS8XVcBUxRcL4ICo7QVfw7PUCq1JvLf00HOvD7XWs"
);

const createPaymentStripe: RequestHandler = async (req, res) => {
  try {
    ////////////////////////////////////////////////////////////////////////
    // FOR HOSTED CHECKOUT IN BACKEND

    // console.log(req.body);
    // const { amount, token } = req.body;
    // const charge = await stripeClient.charges.create({
    //   amount,
    //   currency: "usd",
    //   source: token,
    //   description: "Charge for test@example.com",
    // });

    // res.json({
    //   charge: charge,
    // });

    ////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////////////////
    // FOR INTEGRATION WITH REACT FRONTEND
    const { name, productOwner, description, price, quantity } = req.body;
    console.log(`requestBody`, req.body);
    const session = await stripeClient.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: name,
            },
            unit_amount: price * 100,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    console.log(`STRIPE`, session);
    res.json({ id: session.id });
    /////////////////////////////////////////////////////////////////////
  } catch (error: any) {
    console.error("Error processing payment:", error.message);
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
};

export default createPaymentStripe;
