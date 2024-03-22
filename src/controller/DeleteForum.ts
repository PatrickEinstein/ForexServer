import { RequestHandler } from "express";
import ForumModel from "../Models/Forum.js";
import ReplyModel from "../Models/Reply.js";

const DeleteForum: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const foundForum = await ForumModel.findByIdAndDelete(_id);
    if (foundForum) {
      await ReplyModel.deleteMany({ forumId: _id });
      res.status(200).json({
        status: true,
        message: foundForum,
      });
    } else {
      res.status(404).json({
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

export default DeleteForum;
