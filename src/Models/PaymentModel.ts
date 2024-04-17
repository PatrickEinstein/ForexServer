import mongoose, { Document, Schema, Model } from "mongoose";

interface IPayment extends Document {
  id?: string;
  intent?: string;
  state?: string;
  cart?: string;
  payment_method?: string;
  status?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  createTime?: Date;
  countryCode?: string;
  amount?: string;
  description?: string;
  currency?: string;
  userId: string;
}

const PaymentSchema: Schema<IPayment> = new mongoose.Schema({
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

const PaymentModel: Model<IPayment> = mongoose.model("Payment", PaymentSchema);

export default PaymentModel;
