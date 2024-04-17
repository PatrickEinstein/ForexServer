import { RequestHandler } from "express";
import VideoModel from "../Models/Video.js";
import uploadResources from "../config/Cloudinary.js";
import CourseModel from "../Models/Courses.js";

interface RequestTyping {
  title: string;
  description: string;
  link: string;
  courseId: string;
  courseTitle: string;
}

const createChapter: RequestHandler = async (req, res, next) => {
  const { title, description, courseId, courseTitle }: RequestTyping = req.body;
  if (!req.files || req.files.length === 0 || !title || !description) {
    return res.status(400).json({
      status: false,
      message: "a post must contain title, description, and an image",
    });
  }
  try {
    const [existingCourse, existingChapter] = await Promise.all([
      await CourseModel.findOne({
        courseTitle: courseTitle,
        _id: courseId,
      }),
      await VideoModel.findOne({
        description: description,
        title: title,
        courseId: courseId,
      }),
    ]);
    if (!existingCourse) {
      return res.status(400).json({
        status: false,
        message: "Course does not exist",
      });
    }
    if (existingChapter) {
      return res.status(400).json({
        status: false,
        message: "Chapter already exists",
      });
    }

    const [videoUrl, script] = await Promise.all([
      req.files[0] && uploadResources(req.files[0].path, "Video"),
      req.files[1] && uploadResources(req.files[1].path, "Scripts"),
    ]);

    const newVideo = await new VideoModel({
      title,
      description,
      link: videoUrl,
      // script: script,
      courseId: courseId,
      courseTitle: courseTitle,
    });
    await newVideo.save();
    res.status(201).json({
      status: true,
      message: "A new Video was created",
    });
  } catch (e: any) {
    res.status(404).json({
      status: false,
      message: e.message,
    });
  }
};

export default createChapter;
