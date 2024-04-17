import { RequestHandler } from "express";
import PaymentModel from "../../Models/PaymentModel.js";

const PelPayWebhook: RequestHandler = async (req, res) => {
  const { advicereference, paymentreference } = req.query;

  try {
    const tsq = await fetch(
      `https://api.pelpay.ng/api/Transaction/bypaymentreference/${paymentreference}`,
      {
        method: "GET",
      }
    );
    const findExistingTransaction = await PaymentModel.findOne({
      id: advicereference,
    });
    console.log(`transToUploadInsidPelPayWebhook::`, findExistingTransaction);
    if (findExistingTransaction) {
      console.log(`transToUploadInsideWebhook::`, findExistingTransaction);
      // findExistingTransaction.intent = intent;
      // findExistingTransaction.firstName = first_name;
      // findExistingTransaction.lastName = last_name;
      // findExistingTransaction.state = state;
      // findExistingTransaction.cart = cart;
      // findExistingTransaction.payment_method = payment_method;
      // findExistingTransaction.status = status;
      // findExistingTransaction.email = email;
      // findExistingTransaction.currency = currency;
      // findExistingTransaction.amount = total.toString();
      // await findExistingTransaction.save();
      // const { userId, description } = findExistingTransaction;
      // if (state === "approved") {
      //   const findUserSub = await SubscriptionModel.findOne({ id: userId });
      //   if (findUserSub && description) {
      //     findUserSub.courses.push(description);
      //     findUserSub.save()
      //   }
      //   res.redirect(`http://localhost:3000/confirmation/${payment.id}`);
      // }
    }
    const status = await tsq.json();
    console.log(`tsq::`, status);
    return res.status(200).json({
      status: true,
      message: status.responseData.transactionStatus,
    });
  } catch (err: any) {
    return res.status(400).json({
      status: false,
      message: err.message,
    });
  }
};

export default PelPayWebhook;
