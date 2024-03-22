import { RequestHandler } from "express";
import ReplyModel from "../Models/Reply.js";
import uploadResources from "../config/Cloudinary.js";

const updateReply: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const { author, picture, content } = req.body;
    const FoundReply = await ReplyModel.findOne({ forumId: _id });

    if (FoundReply) {
      const imageUrl = await uploadResources(req.files[0].path, "Forum");

      FoundReply.author = author || FoundReply.author;
      FoundReply.content = content || FoundReply.content;
      FoundReply.picture = imageUrl || FoundReply.picture;
      FoundReply.save();
      res.status(200).json({
        status: false,
        message: FoundReply,
      });
    } else {
      res.status(404).json({
        status: false,
        message: "This Reply could not be found",
      });
    }
  } catch (err: any) {
    res.status(404).json({
      status: false,
      message: err.message,
    });
  }
};

export default updateReply;
