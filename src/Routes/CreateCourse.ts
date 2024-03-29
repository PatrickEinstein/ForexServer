import express from "express";
import CreateCourse from "../controller/CreateCourse.js";

const CreateCourseRouter = express.Router();

/**
 * @openapi
 * paths:
 *   /api/CreateCourse:
 *     post:
 *       tags:
 *         - Courses
 *       summary: Create a new Course
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 coursetitle:
 *                   type: string
 *                 coursedescription:
 *                   type: string
 *                 bookCover:
 *                   type: string
 *                   format: binary
 *       responses:
 *         200:
 *           description: Course created successfully
 *         400:
 *           description: Invalid request
 *         500:
 *           description: Internal server error
 */

CreateCourseRouter.post(
  "/api/CreateCourse",
  CreateCourse
);

export default CreateCourseRouter;
