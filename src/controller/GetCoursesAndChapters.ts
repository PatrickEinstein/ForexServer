import { RequestHandler } from "express";
import CourseModel from "../Models/Courses.js";
import VideoModel from "../Models/Video.js";

const getCoursesAndChapters: RequestHandler = async (req, res) => {
  const { courseId } = req.params;
  try {
    const [foundCourse, chapters] = await Promise.all([
      CourseModel.findOne({ _id: courseId }),
      VideoModel.find({ courseId: courseId }),
    ]);

    chapters.forEach((element) => {
      (element.muxData = {
        id: "1",
        assetId: "asset_123",
        playbackId: "playback_456",
      }),
        (element.userProgress = {
          id: "1",
          userId: "user1",
          isCompleted: false,
        });
    });

    if (!foundCourse) {
      res.status(404).json({
        status: false,
        message: "course not found",
      });
    }
    const response = {
      id: foundCourse?._id,
      userId: "",
      title: foundCourse?.courseTitle,
      description: foundCourse?.description,
      price: "",
      categoryId: "",
      category: {
        id: "",
        name: "",
      },
      chapters: chapters,
    };
    res.status(201).json({
      status: true,
      message: response,
    });
  } catch (err: any) {
    res.status(404).json({
      status: false,
      message: err.message,
    });
  }
};

export default getCoursesAndChapters;
