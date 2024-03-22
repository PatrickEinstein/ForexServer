import express from "express";
import GetAThread from "../controller/GetAThread.js";

const GetAThreadRouter = express.Router();

/**
 * @openapi
 * /get/Thread/{id}:
 *   get:
 *     tags:
 *       - GET Resources
 *     summary: Get an Thread by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Thread to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Thread retrieved successfully
 *       '404':
 *         description: Thread not found
 *       '500':
 *         description: Internal server error
 */

GetAThreadRouter.get("/get/Thread/:_id", GetAThread);

export default GetAThreadRouter;
