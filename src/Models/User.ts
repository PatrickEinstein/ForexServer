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

enum Experience {
  Novice = "Novice",
  Amateur = "Amateur",
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
  Professional = "Professional",
  Expert = "Expert",
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
  experience: string;
  years_of_trading: number;
  ClientId: string;
  ClientSecret: string;
  UniqueId: string;
  google_id: string;
  profilePic: string;
  isVerified: boolean;
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

const UserModel: Model<IUser> = mongoose.model<IUser>("UserModel", UserSchema);

export default UserModel;
