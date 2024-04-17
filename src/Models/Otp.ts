import mongoose, { Document, Schema } from "mongoose";

interface IOTP extends Document {
  otp: Number;
  createdAt: Date;
  user: String;
}

const OTPschema: Schema<IOTP> = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const OTP = mongoose.model<IOTP>("otp", OTPschema);
export default OTP;
