import { RequestHandler } from "express";
import VideoModel from "../Models/Video.js";

const getAllVideos: RequestHandler = async (req, res) => {
  try {
    const page: number = parseInt(req.params.page as string, 10) || 1;
    const pageSize: number = parseInt(req.params.pageSize as string, 10) || 10;
    const skip: number = (page - 1) * pageSize;
    const allAnalyses = await VideoModel.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    res.status(200).json({
      status: true,
      message: allAnalyses,
    });
  } catch (e: any) {
    res.status(200).json({
      status: false,
      message: e.message,
    });
  }
};

export default getAllVideos;
