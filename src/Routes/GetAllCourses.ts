import express from "express";
import GetAllCourses from "../controller/GetAllCourses.js";

const getAllCoursesRouter = express.Router();

/**
 * @openapi
 * '/api/resources/getAllCourses/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - Courses
 *     summary: This Endpoint to get all news
 *     parameters:
 *       - in: path
 *         name: page
 *         required: true
 *         description: Page number for pagination
 *         schema:
 *           type: integer
 *       - in: path
 *         name: pageSize
 *         required: true
 *         description: Number of items per page for pagination
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *       400:
 *         description: Bad request
 */

getAllCoursesRouter.get(
  "/api/resources/getAllCourses/:page/:pageSize",
  GetAllCourses
);

export default getAllCoursesRouter;
