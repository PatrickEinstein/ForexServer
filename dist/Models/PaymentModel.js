import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    intent: {
        type: String,
    },
    state: {
        type: String,
        required: true,
    },
    cart: {
        type: String,
        // required: true,
    },
    payment_method: {
        type: String,
    },
    status: {
        type: String,
    },
    firstName: String,
    lastName: String,
    createTime: String,
    countryCode: String,
    email: String,
    amount: String,
    currency: String,
});
const PaymentModel = mongoose.model("Payment", PaymentSchema);
export default PaymentModel;
