import express from "express";
import updateAnalysis from "../controller/UpdateAnalysis.js";
const UpdateAnalysisRouter = express.Router();
/**
 * @openapi
 * /update/Analysis/{id}:
 *   patch:
 *     tags:
 *       - Update Resources
 *     summary: Update an analysis by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the analysis to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title for the analysis
 *               description:
 *                 type: string
 *                 description: The new description for the analysis
 *               picture:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the analysis
 *               note:
 *                 type: string
 *                 description: The new note for the analysis
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: Analysis updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Analysis not found
 *       '500':
 *         description: Internal server error
 */
UpdateAnalysisRouter.patch("/update/Analysis/:_id", updateAnalysis);
export default UpdateAnalysisRouter;
