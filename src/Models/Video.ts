import mongoose, { Document, Schema } from "mongoose";

interface IVideo extends Document {
  title: String;
  description: String;
  link: String;
  script: String;
}

const VideoSchema: Schema<IVideo> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    script:{
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const VideoModel = mongoose.model<IVideo>("VideoModel", VideoSchema);

export default VideoModel;
