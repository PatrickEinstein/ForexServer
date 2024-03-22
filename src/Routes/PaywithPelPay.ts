import express from "express";
import CardPaymentPelPay from "../controller/PelPay/CardPayment.js";
let paywithPelPayRouter = express.Router();

/**
 * @openapi
 * paths:
 *   /api/PelPay:
 *     post:
 *       tags:
 *         - Payment
 *       summary: pay with PELPAY
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 amount:
 *                   type: number
 *                   default: 100
 *                 currency:
 *                   type: string
 *                   default: "NGN"
 *                 merchantRef:
 *                   type: string
 *                   default: "13277654324537993"
 *                 narration:
 *                   type: string
 *                   default: "test"
 *                 callBackUrl:
 *                   type: string
 *                   default: "https://your_callback_url.com/"
 *                 splitCode:
 *                   type: string
 *                   default: ""
 *                 shouldTokenizeCard:
 *                   type: boolean
 *                   default: false
 *                 customer:
 *                   type: object
 *                   properties:
 *                     customerId:
 *                       type: string
 *                       default: "csg"
 *                     customerLastName:
 *                       type: string
 *                       default: "Chams"
 *                     customerFirstName:
 *                       type: string
 *                       default: "Switch"
 *                     customerEmail:
 *                       type: string
 *                       default: "chams@chamsswitch.com"
 *                     customerPhoneNumber:
 *                       type: string
 *                       default: ""
 *                     customerAddress:
 *                       type: string
 *                       default: ""
 *                     customerCity:
 *                       type: string
 *                       default: ""
 *                     customerStateCode:
 *                       type: string
 *                       default: ""
 *                     customerPostalCode:
 *                       type: string
 *                       default: ""
 *                     customerCountryCode:
 *                       type: string
 *                       default: "NG"
 *                 integrationKey:
 *                   type: string
 *                   default: "3cb46eec-05f1-4173-abeb-89c8ebe625f1"
 *                 mcc:
 *                   type: number
 *                   default: 0
 *                 merchantDescription:
 *                   type: string
 *                   default: "string"
 *                 cardPayment:
 *                   type: object
 *                   properties:
 *                     cardNumber:
 *                       type: string
 *                       default: "5399839222071010"
 *                     expiredMonth:
 *                       type: string
 *                       default: "12"
 *                     expiredYear:
 *                       type: string
 *                       default: "2024"
 *                     cvv:
 *                       type: string
 *                       default: "123"
 *                     cardPin:
 *                       type: string
 *                       default: "123456"
 *                     shouldSaveCard:
 *                       type: boolean
 *                       default: true
 *       responses:
 *         200:
 *           description: Success response
 *         400:
 *           description: Bad request
 *         500:
 *           description: Internal server error
 */

paywithPelPayRouter.post("/api/PelPay", CardPaymentPelPay);

export default paywithPelPayRouter;
