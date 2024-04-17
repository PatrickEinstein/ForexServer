import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const endpointSecret = " whsec_0a509d470f0d51f9131a0ef945399a7aa5d5ce127078f79d89a75c6a42e62ca0";
const callBackUrlStripe = (req, res) => {
    const sig = req.headers["stripe-signature"] || "";
    // if(req.body.type == "payment_intent.succeeded"){
    //   const {data:{object:{id, amount}}} = req.body
    // }
    console.log({
        sig,
    });
    let event;
    console.log("bodyLoad::", req.body, `event::`, event);
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        switch (event.type) {
            case "charge.captured":
                const chargeCaptured = event.data.object;
                console.log(`chargeCaptured:::`, chargeCaptured);
                break;
            case "payment_intent.succeeded":
                const paymentIntent = event.data.object;
                console.log(`PaymentIntentSuccess:::`, paymentIntent);
                break;
            case "payment_intent.payment_failed":
                const paymentFailedIntent = event.data.object;
                console.log(`payment_intent.payment_failed:::`, paymentFailedIntent);
                break;
            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        console.log("bodyLoad::", req.body, `event::`, event);
    }
    catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
};
export default callBackUrlStripe;
