import mongoose, { Document, Schema, Model } from "mongoose";

interface ICourses extends Document {
  courseTitle: string;
  description: string;
  imageUrl: string;
  price: number;
  isPublished: boolean;
}
const CourseSchema: Schema<ICourses> = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    isPublished: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const CourseModel: Model<ICourses> = mongoose.model<ICourses>(
  "Course",
  CourseSchema
);

export default CourseModel;
