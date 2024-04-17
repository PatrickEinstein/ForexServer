import VideoModel from "../Models/Video.js";
const DeleteChapter = async (req, res) => {
    const { id } = req.params;
    console.log(`id-of-video-to-delete`, id);
    try {
        const [videos] = await Promise.all([
            await VideoModel.deleteOne({ _id: id }),
        ]);
        return res.status(201).json({
            status: true,
            message: `${videos.deletedCount} chapters were deleted`,
        });
    }
    catch (err) {
        return res.status(404).json({
            status: false,
            message: err.message,
        });
    }
};
export default DeleteChapter;
