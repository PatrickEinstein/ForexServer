import { RequestHandler } from "express";
import SubscriptionModel from "../Models/SubscriptionModel.js";
import CourseModel from "../Models/Courses.js";

const GetUserRegisteredCourses: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const foundSubscription = await SubscriptionModel.findOne({ id: id });

  try {
    if (foundSubscription) {
      console.log(foundSubscription);
      const coursesPromises = foundSubscription.courses.map(
        async (id) => await CourseModel.findOne({ _id: id })
      );
      const courses = await Promise.all(coursesPromises);
      return res.status(200).json({
        status: true,
        courses: courses,
      });
    } else {
      return res.status(400).json({
        status: false,
        message: "Subscription not found",
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

export default GetUserRegisteredCourses;
