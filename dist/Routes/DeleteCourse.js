import express from "express";
import DeleteCourse from "../controller/DeleteCourse.js";
const DeleteCourseRouter = express.Router();
/**
 * @openapi
 * /delete/course/{id}:
 *   delete:
 *     tags:
 *       - Delete Resources
 *     summary: Delete a course
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the course to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Course deleted successfully
 *       '404':
 *         description: Course not found
 *       '500':
 *         description: Internal server error
 */
DeleteCourseRouter.delete("/delete/course/:id", DeleteCourse);
export default DeleteCourseRouter;
