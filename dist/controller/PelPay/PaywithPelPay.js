import LoginToPelPayService from "./LoginToPelpay";
const GeneratePaymentAdvice = async (req, res) => {
    const Token = await LoginToPelPayService();
    const payload = req.body;
    const response = await fetch(`${process.env.Payment_Base_Url}/Payment/advice`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${Token}`,
            'Content-Type': , 'application/json': 
        },
        body: JSON.stringify({
            payload,
        }),
    });
    const deliveredResponse = await response.json();
};
