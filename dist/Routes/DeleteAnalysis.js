import express from "express";
import DeleteAnalysis from "../controller/DeleteAnalysis.js";
const DeleteAnalysisRouter = express.Router();
/**
 * @openapi
 * /delete/Analysis/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete an analysis by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the analysis to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Analysis deleted successfully
 *       '404':
 *         description: Analysis not found
 *       '500':
 *         description: Internal server error
 */
DeleteAnalysisRouter.delete("/delete/Analysis/:_id", DeleteAnalysis);
export default DeleteAnalysisRouter;
