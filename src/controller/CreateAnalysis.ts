import { RequestHandler } from "express";
import AnalysisModel from "../Models/Analysis.js";
import uploadResources from "../config/Cloudinary.js";

interface IFile extends Document {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: string;
}
interface RequestTyping {
  title: string;
  note: string;
  description: string;
  picture: string;
}

const UploadAnalysis: RequestHandler = async (req, res, next) => {
  const { title, note, description }: RequestTyping = req.body;

  if (!req.files || req.files.length === 0 || !title || !note || !description) {
    return res.status(400).json({
      status: false,
      message: "a post must contain title, description, and an image",
    });
  }
  const imageUrl = await uploadResources(req.files[0].path, "Analyses");
  try {
    const newAnalysis = await new AnalysisModel({
      title,
      description,
      picture: imageUrl,
      note,
    });
    await newAnalysis.save();
    res.status(201).json({
      status: true,
      message: "A new analysis was created",
    });
  } catch (e: any) {
    res.status(404).json({
      status: false,
      message: e.message,
    });
  }
};

export default UploadAnalysis;
