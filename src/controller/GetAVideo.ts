import { RequestHandler } from "express";
import VideoModel from "../Models/Video.js";

const GetAVideo: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundVideo = await VideoModel.findOne({ _id });
    if (FoundVideo) {
      res.status(200).json({
        status: true,
        message: FoundVideo,
      });
    } else {
      res.status(401).json({
        status: false,
        message: "This Forum does not exist",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default GetAVideo;
