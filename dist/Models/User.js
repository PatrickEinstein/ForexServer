import mongoose from "mongoose";
var Role;
(function (Role) {
    Role["Regular"] = "Regular";
    Role["Administrator"] = "Administrator";
})(Role || (Role = {}));
var Subscription;
(function (Subscription) {
    Subscription["Freemium"] = "Freemium";
    Subscription["Regular"] = "Regular";
    Subscription["Premium"] = "Premium";
})(Subscription || (Subscription = {}));
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    DateOfBirth: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.Regular,
        required: true,
    },
    subscription: {
        type: String,
        enum: Object.values(Subscription),
        default: Subscription.Freemium,
        required: true,
    },
});
const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;
