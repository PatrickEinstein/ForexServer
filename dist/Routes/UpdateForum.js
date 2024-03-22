import express from "express";
import updateForum from "../controller/UpdateForum.js";
const UpdateForumRouter = express.Router();
/**
 * @openapi
 * /update/Forum/{id}:
 *   patch:
 *     tags:
 *       - Update Resources
 *     summary: Update an Forum by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Forum to update
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
 *                 description: The new title for the Forum
 *               description:
 *                 type: string
 *                 description: The new description for the Forum
 *               picture:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the Forum
 *               note:
 *                 type: string
 *                 description: The new note for the Forum
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: Forum updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Forum not found
 *       '500':
 *         description: Internal server error
 */
UpdateForumRouter.patch("/update/Forum/:_id", updateForum);
export default UpdateForumRouter;
