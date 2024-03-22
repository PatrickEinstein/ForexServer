import NewsModel from "../Models/News.js";
import uploadResources from "../config/Cloudinary.js";
const updateNews = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, description, picture, note } = req.body;
        const FoundNews = await NewsModel.findOne({ _id });
        if (FoundNews) {
            const imageUrl = await uploadResources(req.files[0].path, "Forum");
            FoundNews.title = title || FoundNews.title;
            FoundNews.description = description || FoundNews.description;
            FoundNews.picture = imageUrl || FoundNews.picture;
            FoundNews.note = note || FoundNews.note;
            FoundNews.save();
            res.status(200).json({
                status: false,
                message: FoundNews,
            });
        }
        else {
            res.status(404).json({
                status: false,
                message: "This News could not be found",
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
export default updateNews;
