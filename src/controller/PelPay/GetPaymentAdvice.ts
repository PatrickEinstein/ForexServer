import { PaymentAdvise } from "../../Models/PelPayModels";
import dotenv from "dotenv";
dotenv.config();
const GeneratePaymentAdvice = async (
  PaymentAdvise: PaymentAdvise,
  Token: string
) => {
  const response = await fetch(
    "https://api.pelpay.ng/Payment/advice",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${Token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        PaymentAdvise,
      }),
    }
  );

  const deliveredResponse = await response.json();
  return deliveredResponse;
};

export default GeneratePaymentAdvice;
