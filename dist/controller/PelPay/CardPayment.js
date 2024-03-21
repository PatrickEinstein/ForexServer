import GeneratePaymentAdvice from "./GetPaymentAdvice.js";
import LoginToPelPayService from "./LoginToPelpay.js";
const CardPaymentPelPay = async (req, res, next) => {
    try {
        // console.log(`REQBODY::`,req.body);
        const Token = await LoginToPelPayService();
        // console.log(`Token::`,Token);
        const adviceRef = await GeneratePaymentAdvice(req.body, Token.access_token);
        console.log(`adviceRef::`, adviceRef);
        const payload = req.body;
        const response = await fetch(`${process.env.Payment_Base_Url}/Payment/process/card/${adviceRef}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                payload,
            }),
        });
        const deliveredResponse = await response.json();
        res.status(200).json({
            status: true,
            message: deliveredResponse,
        });
    }
    catch (err) {
        res.status(500).json({
            status: true,
            message: err.message,
        });
    }
};
export default CardPaymentPelPay;
