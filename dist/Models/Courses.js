import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: true,
    },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    isPublished: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});
const CourseModel = mongoose.model("Course", CourseSchema);
export default CourseModel;
