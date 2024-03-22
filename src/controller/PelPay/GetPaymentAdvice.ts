import { PaymentAdvise } from "../../Models/PelPayModels";
import dotenv from "dotenv";
dotenv.config();
const GeneratePaymentAdvice = async (Payload: PaymentAdvise, Token: string) => {
  const {
    amount,
    currency,
    merchantRef,
    narration,
    callBackUrl,
    splitCode,
    shouldTokenizeCard,
    customer: {
      customerId,
      customerLastName,
      customerFirstName,
      customerEmail,
      customerPhoneNumber,
      customerAddress,
      customerCity,
      customerStateCode,
      customerPostalCode,
      customerCountryCode,
    },
    integrationKey,
    mcc,
    merchantDescriptor,
  } = Payload;
  try {
    const response = await fetch("https://api.pelpay.ng/Payment/advice", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount,
        currency: currency,
        merchantRef: Math.trunc(Math.floor(Math.random() * 600000 + 1)).toString(),
        narration,
        callBackUrl,
        splitCode,
        shouldTokenizeCard,
        customer: {
          customerId,
          customerLastName,
          customerFirstName,
          customerEmail,
          customerPhoneNumber,
          customerAddress,
          customerCity,
          customerStateCode,
          customerPostalCode,
          customerCountryCode,
        },
        integrationKey,
        mcc,
        merchantDescriptor,
      }),
    });

    const deliveredResponse = await response.json();
    return deliveredResponse;
  } catch (err: any) {
    return err.message;
  }
};

export default GeneratePaymentAdvice;
