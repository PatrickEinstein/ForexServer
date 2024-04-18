import mongoose, { Document, Schema } from "mongoose";

interface IVideo extends Document {
  title: String;
  description: String;
  link: String;
  script?: String;
  courseId: String;
  courseTitle: String;
  muxData: Object;
  userProgress: Object;
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
    script: {
      type: String,
      // required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    muxData: {
      type: Object,
      required: false,
    },
    userProgress: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const VideoModel = mongoose.model<IVideo>("VideoModel", VideoSchema);

export default VideoModel;
