import express from "express";
import UploadForum from "../controller/CreateForum.js";
let CreateForumRouter = express.Router();
/**
 * @openapi
 * paths:
 *   /api/createForum:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new Forum
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
 *                 image:
 *                   type: string
 *                   format: binary
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */
CreateForumRouter.post("/api/createForum", UploadForum);
export default CreateForumRouter;
