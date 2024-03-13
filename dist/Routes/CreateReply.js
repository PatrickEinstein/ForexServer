import express from "express";
import UploadReply from "../controller/CreateReply.js";
let CreateReplyRouter = express.Router();
/**
 * @openapi
 * paths:
 *   /api/createReply:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new Reply
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 forumId:
 *                   type: string
 *                 author:
 *                   type: string
 *                 content:
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
CreateReplyRouter.post("/api/createReply", UploadReply);
export default CreateReplyRouter;
