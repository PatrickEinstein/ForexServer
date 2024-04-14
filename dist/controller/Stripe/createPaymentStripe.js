import stripe from "stripe";
import dotenv from "dotenv";
import PaymentModel from "../../Models/PaymentModel.js";
dotenv.config();
const stripeClient = new stripe("sk_test_51OwPAMK45KhpmomBXC5EUYCBb9xJ8YT4lVZBlLNmQ0vKJfv5OoivlGBObeS8XVcBUxRcL4ICo7QVfw7PUCq1JvLf00HOvD7XWs");
const baseUrl = "https://next-fx-client-87txfxznv-patrickeinstein.vercel.app";
// const baseUrl ="http://localhost:3000"
const createPaymentStripe = async (req, res) => {
    try {
        const { name, productOwner, description, price, quantity, userId } = req.body;
        const session = await stripeClient.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            description: description,
                            name: name,
                        },
                        unit_amount: price * 100,
                    },
                    quantity: quantity,
                },
            ],
            mode: "payment",
            success_url: `${baseUrl}/confirmation/${description}`, //this will be a frontend page
            cancel_url: `${baseUrl}/confirmation/${description}`, //this will be a frontend page
        });
        console.log(`STRIPE`, session);
        const { url, amount_total, created, currency, payment_status, id } = session;
        const savedPayment = await new PaymentModel({
            userId,
            id: id,
            description,
            intent: "PENDING",
            state: payment_status,
            payment_method: "STRIPE",
            createTime: Date.now().toString(),
            currency,
            total: amount_total,
        });
        await savedPayment.save();
        console.log(`createdTransinCreate`, savedPayment);
        res.status(200).json({ status: true, message: url });
        // res.redirect(url ?? "");
    }
    catch (error) {
        console.error("Error processing payment:", error.message);
        res.status(500).json({ message: "Payment failed", error: error.message });
    }
};
export default createPaymentStripe;
// 4242 4242 4242 4242
