import GeneratePaymentAdvice from "./GetPaymentAdvice.js";
import LoginToPelPayService from "./LoginToPelpay.js";
const CardPaymentPelPay = async (req, res, next) => {
    try {
        const Token = await LoginToPelPayService();
        const adviceRef = await GeneratePaymentAdvice(req.body, Token.access_token);
        const { cardPayment: { cardNumber, expiredMonth, expiredYear, cvv, cardPin, shouldSaveCard, }, } = req.body;
        const response = await fetch(`https://api.pelpay.ng/Payment/process/card/${adviceRef.responseData.adviceReference}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${Token.access_token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cardNumber,
                expiredMonth,
                expiredYear,
                cvv,
                cardPin,
                shouldSaveCard,
            }),
        });
        const deliveredResponse = await response.json();
        console.log(`creq==>`, deliveredResponse.responseData.formData.formData.JWT, `acsUrl==>`, deliveredResponse.responseData.formData.url);
        const redirectUrl = `https://up-payment.vercel.app/${deliveredResponse.responseData.formData.formData.JWT}/acsUrl?acsUrl=${deliveredResponse.responseData.formData.url}`;
        res.status(200).json({
            status: true,
            message: redirectUrl,
        });
        // res.redirect(redirectUrl);
    }
    catch (err) {
        res.status(500).json({
            status: true,
            message: err.message,
        });
    }
};
export default CardPaymentPelPay;
