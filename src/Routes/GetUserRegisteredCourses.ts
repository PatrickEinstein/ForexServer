import express from "express";
import GetUserRegisteredCourses from "../controller/GetUserRegisteredCourses.js";
const GetUserRegisteredCoursesRouter = express.Router();

/**
 * @openapi
 * /get/userCourses/{id}:
 *   get:
 *     tags:
 *      - GET Resources
 *     summary: Get user registered courses
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: News retrieved successfully
 *       '404':
 *         description: News not found
 *       '500':
 *         description: Internal server error
 */
GetUserRegisteredCoursesRouter.get(
  "/get/userCourses/:id",
  GetUserRegisteredCourses
);
export default GetUserRegisteredCoursesRouter;
