import express from "express";
import updateVideo from "../controller/UpdateVideo.js";

const UpdateVideoRouter = express.Router();

/**
 * @openapi
 * /update/chapter/{id}:
 *   patch:
 *     tags:
 *       - Update Resources
 *     summary: Update an Video by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the Video to update
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
 *                 description: The new title for the Video
 *               description:
 *                 type: string
 *                 description: The new description for the Video
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the Video
 *               script:
 *                 type: string
 *                 format: binary
 *                 description: The new picture for the Video
 *               note:
 *                 type: string
 *                 description: The new note for the Video
 *             example:
 *               title: Updated Title
 *               description: Updated Description
 *               picture: /path/to/updated/picture.jpg
 *               note: Updated Note
 *     responses:
 *       '200':
 *         description: Video updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Video not found
 *       '500':
 *         description: Internal server error
 */

UpdateVideoRouter.patch("/update/chapter/:_id", updateVideo);
export default UpdateVideoRouter;
