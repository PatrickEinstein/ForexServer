import { RequestHandler } from "express";
import paypal from "paypal-rest-sdk";
import PaymentModel from "../../Models/PaymentModel.js";
import SubscriptionModel from "../../Models/SubscriptionModel.js";

const executePaymentPayPal: RequestHandler = (req, res) => {
  const { paymentId, PayerID, token } = req.query;

  const baseUrl = "https://next-fx-client.vercel.app";
  // cosnt baseUrl ="http://localhost:3000"

  paypal.payment.execute(
    paymentId as string,
    { payer_id: PayerID as string },
    async (error, payment) => {
      if (error) {
        res
          .status(500)
          .send(
            "Payment could not be completed at this time, please try again soon"
          );
      } else {
        // console.log("Payment executed successfully:", payment);
        const {
          id,
          intent,
          state,
          cart,
          payer: {
            payment_method,
            status,
            payer_info: { email, first_name, last_name, country_code },
          },
          transactions,
          create_time,
        } = payment;

        const transInfo = transactions[0];
        const {
          amount: { total, currency },
        } = transInfo;

        
        const findExistingTransaction = await PaymentModel.findOne({ id });
        if (findExistingTransaction) {
          findExistingTransaction.intent = intent;
          findExistingTransaction.firstName = first_name;
          findExistingTransaction.lastName = last_name;
          findExistingTransaction.state = state;
          findExistingTransaction.cart = cart;
          findExistingTransaction.payment_method = payment_method;
          findExistingTransaction.status = status;
          findExistingTransaction.email = email;
          findExistingTransaction.currency = currency;
          findExistingTransaction.amount = total.toString();
          await findExistingTransaction.save();
          const { userId, description } = findExistingTransaction;
          if (state === "approved") {
            const findUserSub = await SubscriptionModel.findOne({ id: userId });
            if (findUserSub && description) {
              findUserSub.courses.push(description);
              findUserSub.save();
            }
            res.redirect(`${baseUrl}/confirmation/${payment.id}`);
          }
        }
      }
    }
  );
};

export default executePaymentPayPal;
