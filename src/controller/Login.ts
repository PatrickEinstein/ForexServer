import { RequestHandler } from "express";
import UserModel from "../Models/User.js";
import { Decrypter } from "../Authority/Cryptography.js";
import { GetRandomInit } from "../config/GerRandomInit.js";
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const LoginWithEmailAndPassword: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFoundWithMail = await UserModel.findOne({ email: email });
    console.log(userFoundWithMail)
    if (userFoundWithMail) {
      const P1 = Decrypter(userFoundWithMail?.password);
      console.log(`P1`,P1);

      const BOOL = P1 === password;
      console.log(BOOL);

      if (BOOL) {
        const token = jwt.sign(
          { user: userFoundWithMail.ClientId, token: GetRandomInit(216) },
          process.env.JSONKEY as string,
          {
            expiresIn: 18000,
          }
        );

        res.status(200).json({
          status: true,
          response: token,
        });
      }
    } else {
      res.status(401).json({
        status: false,
        response: "UnAuthorized",
      });
    }
  } catch (err: any) {
    res.status(401).json({
      status: false,
      response: err.message,
    });
  }
};

export default LoginWithEmailAndPassword;
