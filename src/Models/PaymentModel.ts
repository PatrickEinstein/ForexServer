import mongoose, { Document, Schema, Model } from "mongoose";

enum State {
  approved = "APPROVED",
}
enum Status {
  verified = "VERIFIED",
}

interface IPayment extends Document {
  id: string;
  intent: string;
  state: State;
  cart: string;
  payment_method: string;
  status: Status;
  email: string;
  amount: number;
  description: string;
  currency: string;
}

const PaymentSchema: Schema<IPayment> = new mongoose.Schema({
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
  cart:{
    type: String,
    required: true,
  },
  payment_method:{
    type: String,
    required: true,
  },
  status:{
    type: String,
    enum: Status,
    default: Status.verified,
    required: true,
  }
});
