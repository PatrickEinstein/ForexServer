import AnalysisModel from "../Models/Analysis.js";
const DeleteAnalysis = async (req, res) => {
    try {
        const { _id } = req.params;
        const FoundAnalysis = await AnalysisModel.findOneAndDelete({ _id });
        if (FoundAnalysis) {
            res.status(200).json({
                status: true,
                message: FoundAnalysis,
            });
        }
        else {
            res.status(401).json({
                status: false,
                message: "This Analysis does not exist",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
};
export default DeleteAnalysis;
