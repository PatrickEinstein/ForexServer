import express from "express";
import DeleteReply from "../controller/DeleteReply.js";


const DeleteReplyRouter = express.Router();

/**
 * @openapi
 * /delete/Reply/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete an Reply by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Reply to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reply deleted successfully
 *       '404':
 *         description: Reply not found
 *       '500':
 *         description: Internal server error
 */

DeleteReplyRouter.delete("/delete/Reply/:_id", DeleteReply);
export default DeleteReplyRouter;
