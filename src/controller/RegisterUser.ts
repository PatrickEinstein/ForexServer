import { RequestHandler } from "express";
import UserModel from "../Models/User.js";
import { Encrypter } from "../Authority/Cryptography.js";
import { GetRandomInit } from "../config/GerRandomInit.js";
import bcrypt from "bcrypt";
import SubscriptionModel from "../Models/SubscriptionModel.js";

const RegisterUser: RequestHandler = async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    DateOfBirth,
    email,
    password,
    role,
    subscription,
    experience,
    years_of_trading,
  } = req.body;

  try {
    if (
      !firstName ||
      !lastName ||
      !age ||
      !DateOfBirth ||
      !email ||
      !password
    ) {
      return res.status(401).json({
        status: false,
        message:
          "Please provide first name, last name, age, DateOfBirth, email and password",
      });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        response: "Username or email already exists",
      });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const ClientSecretHash = await Encrypter(GetRandomInit(256));
    const CreatedUser = await new UserModel({
      firstName,
      lastName,
      age,
      DateOfBirth,
      email,
      password: passwordHash,
      role,
      subscription,
      experience,
      years_of_trading,
      ClientId: `ChamsSwitchClient-${GetRandomInit(15)}`,
      ClientSecret: ClientSecretHash,
      UniqueId: `ChamsSwitchUnique-${GetRandomInit(50)}`,
    });
    const ThisSavedUser = await CreatedUser.save();
    if (ThisSavedUser) {
      const createSub = await new SubscriptionModel({
        id: CreatedUser._id,
        courses: [],
      });
      createSub.save();
    }
    return res.status(200).json({
      status: true,
      response: `welcome ${ThisSavedUser.firstName}, your uniqueId is ${ThisSavedUser.UniqueId}`,
      UniqueId: ThisSavedUser.UniqueId,
    });
  } catch (error: any) {
    return res.status(500).json({ status: false, response: error.message });
  }
};

export default RegisterUser;
