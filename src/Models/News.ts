import mongoose, { Document, Schema } from "mongoose";

interface INews extends Document {
  title: string;
  picture: string;
  note: string;
  description: string;
}

const NewsSchema: Schema<INews> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    note: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NewsModel = mongoose.model<INews>("NewsModel", NewsSchema);

export default NewsModel;
