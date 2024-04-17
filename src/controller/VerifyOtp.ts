import { RequestHandler } from "express";
import OTP from "../Models/Otp.js";

// const baseUrl = "https://next-fx-client.vercel.app";
const baseUrl = "http://localhost:3000";

const VerifyOtp: RequestHandler = async (req, res, next) => {
  const { user, otp } = req.query;

  console.log(req.query);

  const isExists = await OTP.findOne({ otp: otp, user: user });
  if (isExists) {
    res.redirect(`${baseUrl}/dashboard/${user}}`);
  }
  res.status(401).json({
    status: false,
    response: "Wrong OTP",
  });
};

export default VerifyOtp;
