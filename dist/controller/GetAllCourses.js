import CourseModel from "../Models/Courses.js";
const GetAllCourses = async (req, res) => {
    try {
        const page = parseInt(req.params.page, 10) || 1;
        const pageSize = parseInt(req.params.pageSize, 10) || 10;
        const skip = (page - 1) * pageSize;
        const allCourses = await CourseModel.find({})
            .skip(skip)
            .limit(pageSize)
            .sort({ createdAt: -1 });
        res.status(201).json({
            status: true,
            message: allCourses,
        });
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: err.message,
        });
    }
};
export default GetAllCourses;
