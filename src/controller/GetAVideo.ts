import { RequestHandler } from "express";
import VideoModel from "../Models/Video.js";

const GetAVideo: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundVideo = await VideoModel.findOne({ _id });
    if (FoundVideo) {
      FoundVideo.muxData = {
        id: "1",
        assetId: "asset_123",
        playbackId: "playback_456",
      };
      FoundVideo.userProgress = {
        id: "1",
        userId: "user1",
        isCompleted: false,
      };
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
