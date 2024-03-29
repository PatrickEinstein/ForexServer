import express from "express";
import createChapter from "../controller/CreateChapter.js";
let createChapterRouter = express.Router();
/**
 * @openapi
 * paths:
 *   /api/createChapter:
 *     post:
 *       tags:
 *         - Courses
 *       summary: Create a new chapter
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 courseId:
 *                   type: string
 *                 courseTitle:
 *                   type: string
 *                 video:
 *                   type: string
 *                   format: binary
 *                 script:
 *                   type: string
 *                   format: binary
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */
createChapterRouter.post("/api/createChapter", createChapter);
export default createChapterRouter;
