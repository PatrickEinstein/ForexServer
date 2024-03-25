import mongoose from "mongoose";
const VideoSchema = new mongoose.Schema({
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
        required: true,
    }
}, {
    timestamps: true,
});
const VideoModel = mongoose.model("VideoModel", VideoSchema);
export default VideoModel;
