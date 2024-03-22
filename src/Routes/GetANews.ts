import express from "express";
import GetANews from "../controller/GetANews.js";


const GetAnNewsRouter = express.Router();

/**
 * @openapi
 * /get/News/{id}:
 *   get:
 *     tags:
 *      - GET Resources
 *     summary: Get an News by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the News to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: News retrieved successfully
 *       '404':
 *         description: News not found
 *       '500':
 *         description: Internal server error
 */

GetAnNewsRouter.get("/get/News/:_id", GetANews);

export default GetAnNewsRouter;
