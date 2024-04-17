import AnalysisModel from "../Models/Analysis.js";
const getAllAnalyses = async (req, res) => {
    try {
        const page = parseInt(req.params.page, 10) || 1;
        const pageSize = parseInt(req.params.pageSize, 10) || 10;
        const skip = (page - 1) * pageSize;
        const allAnalyses = await AnalysisModel.find({})
            .skip(skip)
            .limit(pageSize)
            .sort({ createdAt: -1 });
        res.status(200).json({
            status: true,
            message: allAnalyses,
        });
    }
    catch (e) {
        res.status(200).json({
            status: false,
            message: e.message,
        });
    }
};
export default getAllAnalyses;
