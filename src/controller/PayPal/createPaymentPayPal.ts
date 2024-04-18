import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";
import { RequestHandler } from "express";
import PaymentModel from "../../Models/PaymentModel.js";
dotenv.config();

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID ?? "",
  client_secret: process.env.PAYPAL_SECRET ?? "",
});

const createPaymentPayPal: RequestHandler = (req, res) => {
  const { amount, currency, description, userId } = req.body;

  const baseUrl = "https://forexserver.onrender.com";
  // const baseUrl ="http://localhost:5000"

  paypal.payment.create(
    {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: `${baseUrl}/api/paypal/execute`,
        cancel_url: `${baseUrl}/api/paypal/execute`,
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
    async function (error: any, payment: any) {
      if (error) {
        return res.status(500).json({
          message: error.message,
        });
      } else {
        console.log("Payment created successfully:", payment);
        const {
          id,
          intent,
          state,
          payer: { payment_method },
          transactions,
          create_time,
        } = payment;

        const transInfo = transactions[0];
        const {
          amount: { total, currency },
        } = transInfo;
        const savedPayment = await new PaymentModel({
          userId,
          id,
          description,
          intent: "PENDING",
          state,
          payment_method,
          createTime: create_time,
          currency,
          total,
        });
        await savedPayment.save();
        console.log(`createdTransinCreate`, savedPayment);
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
