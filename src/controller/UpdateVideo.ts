import { RequestHandler } from "express";
import VideoModel from "../Models/Video.js";
import uploadResources from "../config/Cloudinary.js";

const updateVideo: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, description, picture } = req.body;
    const FoundVideo = await VideoModel.findOne({ _id });

    if (FoundVideo) {
      const imageUrl = req.files[0] && await uploadResources(req.files[0].path, "Forum");
      FoundVideo.title = title || FoundVideo.title;
      FoundVideo.description = description || FoundVideo.description;
      FoundVideo.link = imageUrl || FoundVideo.link;
      FoundVideo.save();
      res.status(200).json({
        status: true,
        message: FoundVideo,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "This Video could not be found",
      });
    }
  } catch (err: any) {
    res.status(404).json({
      status: false,
      message: err.message,
    });
  }
};

export default updateVideo;
