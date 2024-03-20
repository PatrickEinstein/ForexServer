import paypal from "paypal-rest-sdk";
const executePaymentPayPal = (req, res) => {
    const { paymentId, PayerID, token } = req.query;
    paypal.payment.execute(paymentId, { payer_id: PayerID }, (error, payment) => {
        if (error) {
            console.error("Error executing payment:", error);
            res
                .status(500)
                .send("Payment could not be completed at this time, please try again soon");
        }
        else {
            console.log("Payment executed successfully:", payment);
            res.json({ payment: payment });
        }
    });
};
export default executePaymentPayPal;
