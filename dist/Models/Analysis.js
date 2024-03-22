import mongoose from "mongoose";
const AnalysisSchema = new mongoose.Schema({
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
        // required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const AnalysisModel = mongoose.model("AnalysisModel", AnalysisSchema);
export default AnalysisModel;
