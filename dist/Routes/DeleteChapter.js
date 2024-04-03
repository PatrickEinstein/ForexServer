import express from "express";
import DeleteChapter from "../controller/DeleteAChapter.js";
const DeleteChapterRouter = express.Router();
/**
 * @openapi
 * /delete/chapter/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete a chapter
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chapter to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: CHapter deleted successfully
 *       '404':
 *         description: CHapter not found
 *       '500':
 *         description: Internal server error
 */
DeleteChapterRouter.delete("/delete/chapter/:id", DeleteChapter);
export default DeleteChapterRouter;
