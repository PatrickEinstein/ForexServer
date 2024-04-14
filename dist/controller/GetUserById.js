import UserModel from "../Models/User.js";
const GetUserById = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(req.params);
        const FoundUser = await UserModel.findOne({ _id }).select("-ClientSecret -password");
        if (FoundUser) {
            res.status(200).json({
                status: true,
                message: FoundUser,
            });
        }
        else {
            res.status(401).json({
                status: false,
                message: "This User does not exist",
            });
        }
    }
    catch (err) {
        res.status(500).json({
            status: false,
            message: err.message,
        });
    }
};
export default GetUserById;
