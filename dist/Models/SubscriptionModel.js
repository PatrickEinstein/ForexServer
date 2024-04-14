import mongoose from "mongoose";
const SubscriptionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    courses: {
        type: [String],
    },
});
const SubscriptionModel = mongoose.model("Subscription", SubscriptionSchema);
export default SubscriptionModel;
