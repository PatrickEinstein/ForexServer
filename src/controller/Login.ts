import { RequestHandler } from "express";
import UserModel from "../Models/User.js";
import { Decrypter } from "../Authority/Cryptography.js";
import { GetRandomInit } from "../config/GerRandomInit.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import OTP from "../Models/Otp.js";
import mailer from "../config/Nodemailer.js";

const LoginWithEmailAndPassword: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  // console.log({ email, password });
  const baseUrl = "https://next-fx-client.vercel.app";
  // const baseUrl = "http://localhost:3000";

  try {
    const userFoundWithMail = await UserModel.findOne({ email: email });
    if (userFoundWithMail) {
      const isMatch = await bcrypt.compare(
        password,
        userFoundWithMail?.password
      );
      // console.log(`isMatch::`, isMatch, `foundafterMatch`, userFoundWithMail);

      if (isMatch) {
        console.log(`isMatch:::`, userFoundWithMail);

        if (!userFoundWithMail.isVerified) {
          const { _id } = userFoundWithMail;
          const otp = Math.trunc(Math.random() * 9000 + 1);
          const newOTP = await new OTP({ otp, user: _id });
          newOTP.save();
          const subject = "WebPips Verifiation";
          await mailer(email, subject, newOTP.otp);
          return res.status(200).json({
            status: true,
            link: `${baseUrl}/verify/?auth=${_id}`,
          });
        } else {
          // console.log(`isMatchedVerified:::`, userFoundWithMail);

          const token = jwt.sign(
            { user: userFoundWithMail.ClientId, token: GetRandomInit(216) },
            process.env.JSONKEY as string,
            {
              expiresIn: 18000,
            }
          );
          return res.status(200).json({
            status: true,
            user: userFoundWithMail._id,
            response: token,
          });
        }
      } else {
        return res.status(401).json({
          status: false,
          response: "Email or Password incorrect",
        });
      }
    } else {
      // console.log(`notMatched:::`, userFoundWithMail);
      return res.status(401).json({
        status: false,
        response: "Email or Password incorrect",
      });
    }
  } catch (err: any) {
    return res.status(401).json({
      status: false,
      response: err.message,
    });
  }
};

export default LoginWithEmailAndPassword;
