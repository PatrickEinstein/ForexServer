import mongoose, { Document, Schema, Model } from "mongoose";

enum Role {
  Regular = "Regular",
  Administrator = "Administrator",
}

enum Subscription {
  Freemium = "Freemium",
  Regular = "Regular",
  Premium = "Premium",
}

interface IUser extends Document {
  firstName: string;
  lastName: string;
  age: number;
  DateOfBirth: string;
  email: string;
  password: string;
  role: Role;
  subscription: Subscription;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
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

const UserModel: Model<IUser> = mongoose.model<IUser>(
  "UserModel",
  UserSchema
);

export default UserModel;
