import mongoose from "mongoose";
var State;
(function (State) {
    State["approved"] = "APPROVED";
})(State || (State = {}));
var Status;
(function (Status) {
    Status["verified"] = "VERIFIED";
})(Status || (Status = {}));
const PaymentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    intent: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        enum: State,
        default: State.approved,
    },
    cart: {
        type: String,
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: Status,
        default: Status.verified,
        required: true,
    }
});
