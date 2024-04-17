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
var Experience;
(function (Experience) {
    Experience["Novice"] = "Novice";
    Experience["Amateur"] = "Amateur";
    Experience["Beginner"] = "Beginner";
    Experience["Intermediate"] = "Intermediate";
    Experience["Advanced"] = "Advanced";
    Experience["Professional"] = "Professional";
    Experience["Expert"] = "Expert";
})(Experience || (Experience = {}));
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
    profilePic: {
        type: String,
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
        // required: true,
    },
    subscription: {
        type: String,
        enum: Object.values(Subscription),
        default: Subscription.Freemium,
        // required: true,
    },
    experience: {
        type: String,
        enum: Object.values(Experience),
        default: Experience.Beginner,
    },
    years_of_trading: {
        type: Number,
        default: 1,
    },
    ClientId: {
        type: String,
        required: true,
    },
    ClientSecret: {
        type: String,
        required: true,
    },
    UniqueId: {
        type: String,
        required: true,
    },
    google_id: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
});
const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;
