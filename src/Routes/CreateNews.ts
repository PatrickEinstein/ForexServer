import express from "express";
import UploadNews from "../controller/CreateNews.js";

let CreateNewsRouter = express.Router();

/**
 * @openapi
 * paths:
 *   /api/createNews:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new News
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
 *                 note:
 *                   type: string
 *       responses:
 *         200:
 *           description: {}
 *         404:
 *           description: Not Found
 */

CreateNewsRouter.post("/api/createNews", UploadNews);

export default CreateNewsRouter;
