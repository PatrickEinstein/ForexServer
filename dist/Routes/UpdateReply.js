import express from "express";
import updateReply from "../controller/UpdateReply.js";
const UpdateReplyRouter = express.Router();
/**
 * @openapi
 * /update/Reply/{id}:
 *   patch:
 *     tags:
 *       - Update Resources
 *     summary: Update an Reply by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Reply to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               author:
 *                 type: string
 *                 description: The new title for the Reply
 *               content:
 *                 type: string
 *                 description: The new description for the Reply
 *               picture:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the Reply
 *               note:
 *                 type: string
 *                 description: The new note for the Reply
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: Reply updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Reply not found
 *       '500':
 *         description: Internal server error
 */
UpdateReplyRouter.patch("/update/Reply/:_id", updateReply);
export default UpdateReplyRouter;
