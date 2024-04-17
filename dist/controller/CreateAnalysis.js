import AnalysisModel from "../Models/Analysis.js";
import uploadResources from "../config/Cloudinary.js";
const UploadAnalysis = async (req, res, next) => {
    const { title, note, description } = req.body;
    if (!req.files || req.files.length === 0 || !title || !note || !description) {
        return res.status(400).json({
            status: false,
            message: "a post must contain title, description, and an image",
        });
    }
    const imageUrl = await uploadResources(req.files[0].path, "Analyses");
    try {
        const newAnalysis = await new AnalysisModel({
            title,
            description,
            picture: imageUrl,
            note,
        });
        await newAnalysis.save();
        res.status(201).json({
            status: true,
            message: "A new analysis was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: e.message,
        });
    }
};
export default UploadAnalysis;
