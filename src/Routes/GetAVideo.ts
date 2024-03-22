import express from "express";
import GetAVideo from "../controller/GetAVideo.js";



const GetAVideoRouter = express.Router();

/**
 * @openapi
 * /get/Video/{id}:
 *   get:
 *     tags:
 *       - GET Resources
 *     summary: Get an Video by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Video to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Video retrieved successfully
 *       '404':
 *         description: Video not found
 *       '500':
 *         description: Internal server error
 */

GetAVideoRouter.get("/get/Video/:_id", GetAVideo);

export default GetAVideoRouter;
