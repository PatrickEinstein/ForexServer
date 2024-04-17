import express from "express";
import UploadAnalysis from "../controller/CreateAnalysis.js";
let CreateAnalysisRouter = express.Router();
/**
 * @openapi
 * paths:
 *   /api/createAnalysis:
 *     post:
 *       tags:
 *         - Upload
 *       summary: Create a new analysis
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
CreateAnalysisRouter.post("/api/createAnalysis", UploadAnalysis);
export default CreateAnalysisRouter;
