import express from "express";
import UploadVideo from "../controller/CreateVideo.js";
let CreateVideoRouter = express.Router();
/**
 * @openapi
 * paths:
 *   /api/createCourse:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new Course
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
CreateVideoRouter.post("/api/createCourse", UploadVideo);
export default CreateVideoRouter;
