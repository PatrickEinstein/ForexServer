import express from "express";
import QueryTransaction from "../controller/FindTransactionbyId.js";
const FindTransactionbyIdRouter = express.Router();
/**
 * @openapi
 * /get/transaction/{id}:
 *   get:
 *     tags:
 *      - GET Resources
 *     summary: Get transaction status
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the transaction to retrieve
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
FindTransactionbyIdRouter.get("/get/transaction/:id", QueryTransaction);
export default FindTransactionbyIdRouter;
