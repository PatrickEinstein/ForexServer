import express from "express";
import GetAnAnalysis from "../controller/GetAnAnalysis.js";
const GetAnAnalysisRouter = express.Router();
/**
 * @openapi
 * /get/Analysis/{id}:
 *   get:
 *     tags:
 *       - GET Resources
 *     summary: Get an analysis by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the analysis to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Analysis retrieved successfully
 *       '404':
 *         description: Analysis not found
 *       '500':
 *         description: Internal server error
 */
GetAnAnalysisRouter.get("/get/Analysis/:_id", GetAnAnalysis);
export default GetAnAnalysisRouter;
