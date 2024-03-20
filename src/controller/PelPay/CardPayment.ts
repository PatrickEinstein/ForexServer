import { RequestHandler } from "express";
import GeneratePaymentAdvice from "./GetPaymentAdvice.js";
import { CardPayment } from "../../Models/PelPayModels.js";
import LoginToPelPayService from "./LoginToPelpay.js";

const CardPaymentPelPay: RequestHandler = async (req, res, next) => {
  try {
    const Token = await LoginToPelPayService();
    const adviceRef = await GeneratePaymentAdvice(req.body, Token);

    const payload = req.body as CardPayment;
    const response = await fetch(
      `${process.env.Payment_Base_Url}/Payment/process/card/${adviceRef}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payload,
        }),
      }
    );
    const deliveredResponse = await response.json();
    res.status(200).json({
      status: true,
      message: deliveredResponse,
    });
  } catch (err: any) {
    res.status(500).json({
      status: true,
      message: err.message,
    });
  }
};

export default CardPaymentPelPay;
