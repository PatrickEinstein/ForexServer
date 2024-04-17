import AnalysisModel from "../Models/Analysis.js";
const GetAnAnalysis = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(_id);
        const FoundAnAnalysis = await AnalysisModel.findOne({ _id });
        if (FoundAnAnalysis) {
            res.status(200).json({
                status: true,
                message: FoundAnAnalysis,
            });
        }
        else {
            res.status(401).json({
                status: false,
                message: "This Forum does not exist",
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
export default GetAnAnalysis;
