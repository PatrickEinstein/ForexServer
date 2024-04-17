import CourseModel from "../Models/Courses.js";
import VideoModel from "../Models/Video.js";
const DeleteCourse = async (req, res) => {
    const { id } = req.params;
    console.log(`id-of-course-to-delete`, id);
    try {
        const [course, videos] = await Promise.all([
            await CourseModel.deleteOne({ _id: id }),
            await VideoModel.deleteMany({ courseId: id }),
        ]);
        console.log(`courseDel==>`, course, `videoDel==>`, videos);
        return res.status(201).json({
            status: true,
            message: `${course.deletedCount} courses and ${videos.deletedCount} videos were deleted`,
        });
    }
    catch (err) {
        return res.status(404).json({
            status: false,
            message: err.message,
        });
    }
};
export default DeleteCourse;
