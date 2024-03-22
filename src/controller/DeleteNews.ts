import { RequestHandler } from "express";
import NewsModel from "../Models/News.js";


const DeleteNews: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundVideo = await NewsModel.findOneAndDelete({ _id });
    if (FoundVideo) {
      res.status(200).json({
        status: true,
        message: FoundVideo,
      });
    } else {
      res.status(401).json({
        status: false,
        message: "This News does not exist",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default DeleteNews;
