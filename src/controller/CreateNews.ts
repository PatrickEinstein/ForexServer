import { RequestHandler } from "express";
import NewsModel from "../Models/News.js";
import uploadResources from "../config/Cloudinary.js";

interface RequestTyping {
  title: string;
  note: string;
  description: string;
  picture: string;
}

const UploadNews: RequestHandler = async (req, res, next) => {
  const { title, note, description}: RequestTyping = req.body;
  if (!req.files || !title || !note || !description) {
    return res.status(400).json({
      status: false,
      message: "a post must contain title, description, and an image",
    });
  }
  const imageUrl = await uploadResources(req?.files[0]?.path, "News");
  try {
    const newNews = await new NewsModel({
      title,
      description,
      picture: imageUrl,
      note,
    });
    await newNews.save();
    res.status(201).json({
      status: true,
      message: "A new NEWS was created",
    });
  } catch (e: any) {
    res.status(404).json({
      status: false,
      message: e.message,
    });
  }
};

export default UploadNews;
