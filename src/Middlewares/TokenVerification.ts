import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { RequestHandler } from "express";
dotenv.config();
const TokenVerification = (): RequestHandler => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JSONKEY as string, (err:any, decoded:any) => {
      if (err) {
        return res.status(401).json({ message: "Token expired or invalid" });
      }
      req.user = decoded;
      console.log(decoded);
      next();
    });
  };
};


export default TokenVerification;
