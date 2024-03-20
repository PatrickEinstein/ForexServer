const GeneratePaymentAdvice = async (PaymentAdvise, Token) => {
    const response = await fetch(`${process.env.Payment_Base_Url}/Payment/advice`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${Token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            PaymentAdvise,
        }),
    });
    const deliveredResponse = await response.json();
    return deliveredResponse;
};
export default GeneratePaymentAdvice;
