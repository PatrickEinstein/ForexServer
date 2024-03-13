import mongoose, { Document, Schema } from "mongoose";

interface IAnalysis extends Document {
  title: String;
  description: String;
  picture: String;
  note: String;
}

const AnalysisSchema: Schema<IAnalysis> = new mongoose.Schema(
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

const AnalysisModel = mongoose.model<IAnalysis>(
  "AnalysisModel",
  AnalysisSchema
);

export default AnalysisModel;
