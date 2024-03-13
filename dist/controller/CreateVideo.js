import VideoModel from "../Models/Video.js";
import uploadResources from "../config/Cloudinary.js";
const UploadVideo = async (req, res, next) => {
    const { title, description } = req.body;
    if (!req.files || req.files.length === 0 || !title || !description) {
        return res.status(400).json({
            status: false,
            message: "a post must contain title, description, and an image",
        });
    }
    const videoUrl = await uploadResources(req.files[0].path, "Video");
    try {
        const newVideo = await new VideoModel({
            title,
            description,
            link: videoUrl,
        });
        await newVideo.save();
        res.status(201).json({
            status: true,
            message: "A new Video was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: e.message,
        });
    }
};
export default UploadVideo;
