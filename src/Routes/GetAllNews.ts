import express from "express";
import getAllAnalyses from "../controller/GetAllAnalyses.js";
import getAllNews from "../controller/GetAllNews.js";

const getAllNewsRouter = express.Router();

/**
 * @openapi
 * '/api/resources/getAllNews/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - All Resources
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

getAllNewsRouter.get(
  "/api/resources/getAllNews/:page/:pageSize",
  getAllNews
);

export default getAllNewsRouter;
