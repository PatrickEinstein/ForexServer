import mongoose from "mongoose";
const OTPschema = new mongoose.Schema({
    otp: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 600000,
    },
}, { timestamps: true });
const OTP = mongoose.model("otp", OTPschema);
export default OTP;
