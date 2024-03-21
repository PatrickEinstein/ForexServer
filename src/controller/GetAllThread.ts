import { RequestHandler } from "express";
import ForumModel from "../Models/Forum.js";
import ReplyModel from "../Models/Reply.js";

const getAllThreads: RequestHandler = async (req, res) => {
  try {
    const page: number = parseInt(req.params.page as string, 10) || 1;
    const pageSize: number = parseInt(req.params.pageSize as string, 10) || 10;
    const skip: number = (page - 1) * pageSize;
    const foundForums = await ForumModel.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    const replyPromises = foundForums.map(async (forum) => {
      const replies = await ReplyModel.find({ forumId: forum._id });
      return {
        forum,
        replies,
      };
    });
    const foundRepliesAndForums = await Promise.all(replyPromises);
    res.status(200).json({
      status: true,
      message: foundRepliesAndForums,
    });
  } catch (e: any) {
    res.status(200).json({
      status: false,
      message: e.message,
    });
  }
};
export default getAllThreads;