import express from "express";
import updateNews from "../controller/UpdateNews.js";
const UpdateNewsRouter = express.Router();
/**
 * @openapi
 * /update/News/{id}:
 *   patch:
 *     tags:
 *       - Update Resources
 *     summary: Update an News by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the News to update
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
 *                 description: The new title for the News
 *               description:
 *                 type: string
 *                 description: The new description for the News
 *               picture:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the News
 *               note:
 *                 type: string
 *                 description: The new note for the News
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: News updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: News not found
 *       '500':
 *         description: Internal server error
 */
UpdateNewsRouter.patch("/update/News/:_id", updateNews);
export default UpdateNewsRouter;
