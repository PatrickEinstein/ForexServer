import UserModel from "../Models/User.js";
import { GetRandomInit } from "../config/GerRandomInit.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
const LoginWithEmailAndPassword = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFoundWithMail = await UserModel.findOne({ email: email });
        // console.log(userFoundWithMail)
        if (userFoundWithMail) {
            const isMatch = await bcrypt.compare(password, userFoundWithMail?.password);
            if (isMatch) {
                const token = jwt.sign({ user: userFoundWithMail.ClientId, token: GetRandomInit(216) }, process.env.JSONKEY, {
                    expiresIn: 18000,
                });
                res.status(200).json({
                    status: true,
                    user: userFoundWithMail._id,
                    response: token,
                });
            }
        }
        else {
            res.status(401).json({
                status: false,
                response: "Email or Password incorrect",
            });
        }
    }
    catch (err) {
        res.status(401).json({
            status: false,
            response: err.message,
        });
    }
};
export default LoginWithEmailAndPassword;
