import { RequestHandler } from "express";
import ReplyModel from "../Models/Reply.js";

const DeleteReply: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundReply = await ReplyModel.findOneAndDelete({ _id });
    if (FoundReply) {
      res.status(200).json({
        status: true,
        message: FoundReply,
      });
    } else {
      res.status(401).json({
        status: false,
        message: "This Reply does not exist",
      });
    }
  } catch (err: any) {
    res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default DeleteReply;
