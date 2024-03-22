import mongoose, { Document, Schema, Model } from "mongoose";
import { IReply } from "./Reply";

interface IForum extends Document {
  title: string;
  picture: string;
  description: string;
  // replies: Array<IReply>;
}

const ForumSchema: Schema<IForum> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ForumModel: Model<IForum> = mongoose.model<IForum>(
  "ForumModel",
  ForumSchema
);

export default ForumModel;
