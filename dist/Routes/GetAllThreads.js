import express from "express";
import getAllThreads from "../controller/GetAllThread.js";
const getAllThreadsRouter = express.Router();
/**
 * @openapi
 * '/api/resources/getAllThreads/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - All Resources
 *     summary: This Endpoint to get all threads
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
getAllThreadsRouter.get("/api/resources/getAllThreads/:page/:pageSize", getAllThreads);
export default getAllThreadsRouter;
