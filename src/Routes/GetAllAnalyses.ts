import express from "express";
import getAllAnalyses from "../controller/GetAllAnalyses.js";

const getAllAnalysesRouter = express.Router();

/**
 * @openapi
 * '/api/resources/getAllAnalyses/{page}/{pageSize}':
 *   get:
 *     tags:
 *       - Resources
 *     summary: This Endpoint to get all analyses
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

getAllAnalysesRouter.get(
  "/api/resources/getAllAnalyses/:page/:pageSize",
  getAllAnalyses
);

export default getAllAnalysesRouter;
