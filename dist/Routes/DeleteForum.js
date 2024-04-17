import express from "express";
import DeleteForum from "../controller/DeleteForum.js";
const DeleteForumRouter = express.Router();
/**
 * @openapi
 * /delete/Forum/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete an Forum by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Forum to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Forum deleted successfully
 *       '404':
 *         description: Forum not found
 *       '500':
 *         description: Internal server error
 */
DeleteForumRouter.delete("/delete/Forum/:_id", DeleteForum);
export default DeleteForumRouter;
