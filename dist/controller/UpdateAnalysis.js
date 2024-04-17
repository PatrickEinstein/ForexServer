import AnalysisModel from "../Models/Analysis.js";
import uploadResources from "../config/Cloudinary.js";
const updateAnalysis = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, picture, note } = req.body;
        const FoundAnalysis = await AnalysisModel.findOne({ _id });
        if (FoundAnalysis) {
            const imageUrl = await uploadResources(req.files[0].path, "Analyses");
            FoundAnalysis.title = title || FoundAnalysis.title;
            FoundAnalysis.description = description || FoundAnalysis.description;
            FoundAnalysis.picture = imageUrl || FoundAnalysis.picture;
            FoundAnalysis.note = note || FoundAnalysis.note;
            FoundAnalysis.save();
            res.status(200).json({
                status: false,
                message: FoundAnalysis,
            });
        }
        else {
            res.status(404).json({
                status: false,
                message: "This Analysis could not be found",
            });
        }
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: err.message,
        });
    }
};
export default updateAnalysis;
