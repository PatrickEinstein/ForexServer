import ForumModel from "../Models/Forum";
const getAllThreads = (req, res) => {
    try {
        const foundForums = ForumModel.find({});
        console.log(`forums`, foundForums);
    }
    catch (e) { }
};
export default getAllThreads;
