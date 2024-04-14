import mongoose, { Document, Schema, Model } from "mongoose";

interface IUserSub extends Document {
  id: string;
  courses: Array<string>;
}

const SubscriptionSchema: Schema<IUserSub> = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  courses: {
    type: [String],
  },
});

const SubscriptionModel: Model<IUserSub> = mongoose.model(
  "Subscription",
  SubscriptionSchema
);


export default SubscriptionModel;
