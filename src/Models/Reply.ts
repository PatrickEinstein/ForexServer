import mongoose, { Document, Schema } from "mongoose";

export interface IReply extends Document {
  forumId: string;
  author: String;
  content: String;
  picture: String;
}

const IReplySchema: Schema<IReply> = new mongoose.Schema(
  {
    forumId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ReplyModel = mongoose.model<IReply>("IReplyModel", IReplySchema);

export default ReplyModel;
