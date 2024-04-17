import uploadResources from "../config/Cloudinary.js";
import CourseModel from "../Models/Courses.js";
const CreateCourse = async (req, res) => {
    const { coursetitle, coursedescription } = req.body;
    try {
        if (!req.files ||
            req.files.length === 0 ||
            !coursetitle ||
            !coursedescription) {
            return res.status(400).json({
                status: false,
                message: "A new course must have a title and description and a cover image",
            });
        }
        const existingCourse = await CourseModel.findOne({
            courseTitle: coursetitle,
            coursedescription: coursedescription,
        });
        if (existingCourse) {
            return res.status(400).json({
                status: false,
                message: `a course with title ${existingCourse.courseTitle} already exists`,
            });
        }
        const [courseCover] = await Promise.all([
            uploadResources(req.files[0].path, "bookCover"),
        ]);
        const newCourse = await new CourseModel({
            courseTitle: coursetitle,
            description: coursedescription,
            imageUrl: courseCover,
            price: 5,
            isPublished: true,
        });
        await newCourse.save();
        console.log(`newCourse`, newCourse);
        res.status(201).json({
            status: true,
            message: `course '${newCourse.courseTitle}' was successfully created`,
        });
    }
    catch (err) { }
};
export default CreateCourse;
