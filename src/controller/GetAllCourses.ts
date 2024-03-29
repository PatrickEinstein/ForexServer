import { RequestHandler } from "express";
import CourseModel from "../Models/Courses.js";

const GetAllCourses: RequestHandler = async (req, res) => {
  try {
    const page: number = parseInt(req.params.page as string, 10) || 1;
    const pageSize: number = parseInt(req.params.pageSize as string, 10) || 10;
    const skip: number = (page - 1) * pageSize;
    const allCourses = await CourseModel.find({})
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });
    res.status(201).json({
      status: true,
      message: allCourses,
    });
  } catch (err: any) {
    res.status(404).json({
      status: false,
      message: err.message,
    });
  }
};

export default GetAllCourses;
