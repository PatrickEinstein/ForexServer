import express from 'express';
import getCoursesAndChapters from '../controller/GetCoursesAndChapters.js';

const GetCourseAndChaptersRouter = express.Router()


/**
 * @openapi
 * paths:
 *   /api/course/{courseId}:
 *     get:
 *       tags:
 *         - Courses
 *       summary: Get Course and its chapters by courseId
 *       parameters:
 *         - in: path
 *           name: courseId
 *           required: true
 *           schema:
 *             type: string
 *           description: ID of the course to get
 *       responses:
 *         200:
 *           description: Successful operation
 *         404:
 *           description: Course not found
 */

GetCourseAndChaptersRouter.get("/api/course/:courseId",getCoursesAndChapters)

export default GetCourseAndChaptersRouter