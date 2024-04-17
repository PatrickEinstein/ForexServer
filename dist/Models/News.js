import mongoose from "mongoose";
const NewsSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
});
const NewsModel = mongoose.model("NewsModel", NewsSchema);
export default NewsModel;
