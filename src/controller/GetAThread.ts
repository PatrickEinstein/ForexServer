import { RequestHandler } from "express";
import ForumModel from "../Models/Forum.js";
import ReplyModel from "../Models/Reply.js";

const GetAThread: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const foundForum = await ForumModel.findOne({ _id });
    const replies = await ReplyModel.find({ forumId: _id });

    res.status(200).json({
      status: true,
      message: {
        foundForum,
        replies,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default GetAThread;
