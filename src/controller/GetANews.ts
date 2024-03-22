import { RequestHandler } from "express";
import NewsModel from "../Models/News.js";


const GetANews: RequestHandler = async (req, res) => {
  try {
    const { _id } = req.params;
    const FoundNews = await NewsModel.findOne({_id})
    if (FoundNews) {
      res.status(200).json({
        status: true,
        message: FoundNews,
      });
    } else {
      res.status(401).json({
        status: false,
        message: "This Forum does not exist",
      });
    }
  } catch (err: any) {
    res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  }


export default GetANews;
