import { RequestHandler } from "express";
import OTP from "../Models/Otp.js";
import UserModel from "../Models/User.js";

const baseUrl = "https://next-fx-client.vercel.app";
// const baseUrl = "http://localhost:3000";

const VerifyOtp: RequestHandler = async (req, res, next) => {
  const { user, otp } = req.query;
  console.log(req.query);
  try {
    const isExists = await OTP.findOne({ otp: otp, user: user });
    console.log(`isExists`, isExists);
    if (isExists) {
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: user },
        { $set: { isVerified: true } },
        { upsert: true }
      );
      // console.log(updatedUser);
      return res.status(301).json({
        link: `${baseUrl}/login`,
      });
      // return res.redirect(`${baseUrl}/login`);
    }
    return res.status(401).json({
      status: false,
      response: "Wrong OTP",
    });
  } catch (err: any) {
    return res.status(500).json({
      status: false,
      response: err.message,
    });
  }
};

export default VerifyOtp;
