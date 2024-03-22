import ForumModel from "../Models/Forum.js";
import uploadResources from "../config/Cloudinary.js";
const updateForum = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, picture } = req.body;
        const foundForum = await ForumModel.findOne({ _id });
        if (foundForum) {
            const imageUrl = await uploadResources(req.files[0].path, "Forum");
            foundForum.title = title || foundForum.title;
            foundForum.description = description || foundForum.description;
            foundForum.picture = imageUrl || foundForum.picture;
            foundForum.save();
            res.status(200).json({
                status: false,
                message: foundForum,
            });
        }
        else {
            res.status(404).json({
                status: false,
                message: "This Forum could not be found",
            });
        }
    }
    catch (err) {
        res.status(404).json({
            status: false,
            message: err.message,
        });
    }
};
export default updateForum;
