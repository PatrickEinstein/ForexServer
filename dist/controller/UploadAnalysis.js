import AnalysisModel from "../Models/Analysis";
const UploadAnalysis = async (req, res, next) => {
    const { title, note, description, picture } = req.body;
    try {
        const newAnalysis = await new AnalysisModel({
            title,
            description,
            picture,
            note,
        });
        newAnalysis.save();
        res.status(201).json({
            status: true,
            message: "A new analysis was created",
        });
    }
    catch (e) {
        res.status(404).json({
            status: false,
            message: "Failed to create analysis",
        });
    }
};
export default UploadAnalysis;
