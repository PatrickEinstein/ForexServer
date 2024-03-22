import express from "express";
import getAllVideos from "../controller/GetAllVideos.js";


const getAllVideosRouter = express.Router();

/**
 * @openapi
 * '/api/resources/getAllVideos/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - All Resources
 *     summary: This Endpoint to get all videos
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

getAllVideosRouter.get(
  "/api/resources/getAllVideos/:page/:pageSize",
  getAllVideos
);

export default getAllVideosRouter;
