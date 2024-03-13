import ReplyModel from "../Models/Reply.js";
import uploadResources from "../config/Cloudinary.js";
const UploadReply = async (req, res, next) => {
    const { forumId, author, content } = req.body;
    if (!req.files || req.files.length === 0 || !forumId || !author || !content) {
        return res.status(400).json({
            status: false,
            message: "a reply must contain forumId, author, and an content",
        });
    }
    const imageUrl = await uploadResources(req.files[0].path, "News");
    try {
        const newReply = await new ReplyModel({
            forumId,
            author,
            picture: imageUrl,
            content,
        });
        await newReply.save();
        res.status(201).json({
            status: true,
            message: "A new Reply was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: e.message,
        });
    }
};
export default UploadReply;
