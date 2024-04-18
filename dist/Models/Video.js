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
}, {
    timestamps: true,
});
const VideoModel = mongoose.model("VideoModel", VideoSchema);
export default VideoModel;
