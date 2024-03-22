import { RequestHandler } from "express";
import AnalysisModel from "../Models/Analysis.js";

const DeleteAnalysis: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundAnalysis = await AnalysisModel.findOneAndDelete({ _id });
    if (FoundAnalysis) {
      res.status(200).json({
        status: true,
        message: FoundAnalysis,
      });
    } else {
      res.status(401).json({
        status: false,
        message: "This Analysis does not exist",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default DeleteAnalysis;
