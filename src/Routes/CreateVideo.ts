import express from "express";
import UploadVideo from "../controller/CreateVideo.js";

let CreateVideoRouter = express.Router();

/**
 * @openapi
 * paths:
 *   /api/createVideo:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new Video
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
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */

CreateVideoRouter.post("/api/createVideo", UploadVideo);

export default CreateVideoRouter;
