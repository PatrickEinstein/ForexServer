import express from "express";
import GetUserById from "../controller/GetUserById.js";

const GetUserByIdRouter = express.Router();

/**
 * @openapi
 * /get/user/{id}:
 *   get:
 *     tags:
 *      - GET Resources
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User retrieved successfully
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
 */

GetUserByIdRouter.get("/get/user/:_id", GetUserById);

export default GetUserByIdRouter;
