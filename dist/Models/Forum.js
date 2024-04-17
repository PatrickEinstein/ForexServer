import mongoose from "mongoose";
const ForumSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});
const ForumModel = mongoose.model("ForumModel", ForumSchema);
export default ForumModel;
