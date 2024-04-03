import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripeClient = new stripe("sk_test_51OwPAMK45KhpmomBXC5EUYCBb9xJ8YT4lVZBlLNmQ0vKJfv5OoivlGBObeS8XVcBUxRcL4ICo7QVfw7PUCq1JvLf00HOvD7XWs");
const createPaymentStripe = async (req, res) => {
    try {
        const { name, productOwner, description, price, quantity } = req.body;
        const session = await stripeClient.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: name,
                        },
                        unit_amount: price * 100,
                    },
                    quantity: quantity,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/success", //this will be a frontend page
            cancel_url: "http://localhost:3000/cancel", //this will be a frontend page
        });
        // console.log(`STRIPE`, session)
        const { url } = session;
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
