import express from "express";
import DeleteNews from "../controller/DeleteNews.js";


const DeleteNewsRouter = express.Router();

/**
 * @openapi
 * /delete/News/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete an News by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the News to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: News deleted successfully
 *       '404':
 *         description: News not found
 *       '500':
 *         description: Internal server error
 */

DeleteNewsRouter.delete("/delete/News/:_id", DeleteNews);
export default DeleteNewsRouter;
