import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const stripeClient = new stripe("sk_test_51OwPAMK45KhpmomBXC5EUYCBb9xJ8YT4lVZBlLNmQ0vKJfv5OoivlGBObeS8XVcBUxRcL4ICo7QVfw7PUCq1JvLf00HOvD7XWs");
const createPaymentStripe = async (req, res) => {
    try {
        console.log(req.body);
        const { amount, token } = req.body;
        const charge = await stripeClient.charges.create({
            amount,
            currency: "usd",
            source: token,
            description: "Charge for test@example.com",
        });
        res.json({
            charge: charge,
        });
        ////////////////////////////////////////////////////////////////////////
        // const { amount, currency, paymentMethodId, description } = req.body;
        // const paymentIntent = await stripeClient.paymentIntents.create({
        //   amount,
        //   currency,
        //   payment_method: paymentMethodId,
        //   confirm: true,
        //   description,
        // });
        // res.json({ message: 'Payment successful', paymentIntent });
        //////////////////////////////////////////////////////////////
        // const { amount, currency, source, description } = req.body;
        // const charge = await stripeClient.charges.create({
        //   amount,
        //   currency,
        // //   source,
        //   description,
        // });
        // console.log(charge);
        // res.status(200).json({ message: "Payment successful", charge });
        ///////////////////////////////////////////////////////////////////////
        // const { product,quantity,amount,currency } = req.body;
        // const session = await stripeClient.checkout.sessions.create({
        //   payment_method_types: ["card"],
        //   line_items: [
        //     {
        //       price_data: {
        //         currency: currency,
        //         product_data: {
        //           name: product,
        //         },
        //         unit_amount: amount * 100,
        //       },
        //       quantity: quantity,
        //     },
        //   ],
        //   mode: "payment",
        //   success_url: "http://localhost:3000/success",
        //   cancel_url: "http://localhost:3000/cancel",
        // });
        // res.json({ id: session.id });
        ///////////////////////////////////////////////////////////////////////
    }
    catch (error) {
        console.error("Error processing payment:", error.message);
        res.status(500).json({ message: "Payment failed", error: error.message });
    }
};
export default createPaymentStripe;
