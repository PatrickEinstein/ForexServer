import NewsModel from "../Models/News.js";
import uploadResources from "../config/Cloudinary.js";
const UploadNews = async (req, res, next) => {
    const { title, note, description } = req.body;
    if (!req.files || req.files.length === 0 || !title || !note || !description) {
        return res.status(400).json({
            status: false,
            message: "a post must contain title, description, and an image",
        });
    }
    const imageUrl = await uploadResources(req.files[0].path, "News");
    try {
        const newNews = await new NewsModel({
            title,
            description,
            picture: imageUrl,
            note,
        });
        await newNews.save();
        res.status(201).json({
            status: true,
            message: "A new News was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: e.message,
        });
    }
};
export default UploadNews;
