import { RequestHandler } from "express";
import GeneratePaymentAdvice from "./GetPaymentAdvice.js";
// import { CardPayment } from "../../Models/PelPayModels.js";
import LoginToPelPayService from "./LoginToPelpay.js";
import PaymentModel from "../../Models/PaymentModel.js";

const CardPaymentPelPay: RequestHandler = async (req, res, next) => {
  console.log(req.body)
  try {
    const Token = await LoginToPelPayService();
    const adviceRef = await GeneratePaymentAdvice(req.body, Token.access_token);

    // console.log(`adRef::`, adviceRef);

    const {
      responseData: {
        currency,
        adviceReference,
        amount,
        narration,
        status,
        merchantName,
        channels,
      },
    } = adviceRef;

    const savedPayment = await new PaymentModel({
      userId: req.body.userId,
      id: adviceReference,
      description: narration,
      intent: status,
      state: status,
      payment_method: channels[0],
      createTime: Date.now().toString(),
      currency,
      total: amount,
    });
    await savedPayment.save();
    console.log(`savedPayment`, savedPayment);
    res.status(200).json({
      status: true,
      message: adviceRef.responseData.paymentUrl,
    });
  } catch (err: any) {
    res.status(500).json({
      status: true,
      message: err.message,
    });
  }
};

export default CardPaymentPelPay;
