import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";
import { RequestHandler } from "express";
dotenv.config();

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID ?? "",
  client_secret: process.env.PAYPAL_SECRET ?? "",
});

const createPaymentPayPal: RequestHandler = (req, res) => {
  const { amount, currency, description } = req.body;
  paypal.payment.create(
    {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:5000/api/paypal/execute",
        cancel_url: "http://localhost:5000/failed",
        // return_url: "https://fxserver-1.onrender.com/api/paypal/execute",
        // cancel_url: "https://fxserver-1.onrender.com/failed",
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency: currency,
          },
          description: description,
        },
      ],
    },
    function (error: any, payment: any) {
      if (error) {
        return res.status(500).json({
          message: error.message,
        });
      } else {
        console.log("Payment created successfully:", payment);
        // Redirect the user to payment approval URL
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            return res.status(200).json({
              status: true,
              message: payment.links[i].href,
            });
          }
        }
      }
    }
  );
};

export default createPaymentPayPal;
