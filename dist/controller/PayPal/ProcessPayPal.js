import paypal from "paypal-rest-sdk";
import dotenv from "dotenv";
dotenv.config();
paypal.configure({
    mode: "sandbox",
    client_id: process.env.PAYPAL_CLIENT_ID ?? "",
    client_secret: process.env.PAYPAL_SECRET ?? "",
});
const createPaymentPayPal = (req, res) => {
    const { amount, currency, description } = req.body;
    paypal.payment.create({
        intent: "sale",
        payer: {
            payment_method: "paypal",
        },
        redirect_urls: {
            return_url: "http://localhost:8055/success",
            cancel_url: "http://localhost:8055/failed",
        },
        transactions: [
            {
                amount: {
                    total: amount,
                    currency: currency,
                },
                description: description,
            },
        ],
    }, function (error, payment) {
        if (error) {
            return res.status(500).json({
                error: error.message,
            });
        }
        else {
            console.log("Payment created successfully:", payment);
            // Redirect the user to payment approval URL
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === "approval_url") {
                    return res.redirect(payment.links[i].href);
                }
            }
        }
    });
};
export default createPaymentPayPal;
