import mongoose from "mongoose";
const IReplySchema = new mongoose.Schema({
    forumId: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const ReplyModel = mongoose.model("IReplyModel", IReplySchema);
export default ReplyModel;
