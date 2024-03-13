import ForumModel from "../Models/Forum.js";
import uploadResources from "../config/Cloudinary.js";
const UploadForum = async (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({
            status: false,
            message: "a post must contain title, description, and an image",
        });
    }
    const imageUrl = await uploadResources(req.files[0].path, "Forum");
    try {
        const newForum = await new ForumModel({
            title,
            picture: imageUrl,
        });
        await newForum.save();
        res.status(201).json({
            status: true,
            message: "A new Forum was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: e.message,
        });
    }
};
export default UploadForum;
