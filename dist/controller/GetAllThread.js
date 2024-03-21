import ForumModel from "../Models/Forum.js";
import ReplyModel from "../Models/Reply.js";
const getAllThreads = async (req, res) => {
    try {
        const page = parseInt(req.params.page, 10) || 1;
        const pageSize = parseInt(req.params.pageSize, 10) || 10;
        const skip = (page - 1) * pageSize;
        const foundForums = await ForumModel.find({})
            .skip(skip)
            .limit(pageSize)
            .sort({ createdAt: -1 });
        const replyPromises = foundForums.map(async (forum) => {
            const replies = await ReplyModel.find({ forumId: forum._id });
            return {
                forum,
                replies,
            };
        });
        const foundRepliesAndForums = await Promise.all(replyPromises);
        res.status(200).json({
            status: true,
            message: foundRepliesAndForums,
        });
    }
    catch (e) {
        res.status(200).json({
            status: false,
            message: e.message,
        });
    }
};
export default getAllThreads;
