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
 *                 currency:
 *                   type: string
 *                 merchantRef:
 *                   type: string
 *                 narration:
 *                   type: string
 *                 callBackUrl:
 *                   type: string
 *                 splitCode:
 *                   type: string
 *                 shouldTokenizeCard:
 *                   type: boolean
 *                 customer:
 *                   type: object
 *                   properties:
 *                     customerId:
 *                       type: string
 *                     customerLastName:
 *                       type: string
 *                     customerFirstName:
 *                       type: string
 *                     customerEmail:
 *                       type: string
 *                     customerPhoneNumber:
 *                       type: string
 *                     customerAddress:
 *                       type: string
 *                     customerCity:
 *                       type: string
 *                     customerStateCode:
 *                       type: string
 *                     customerPostalCode:
 *                       type: string
 *                     customerCountryCode:
 *                       type: string
 *                 integrationKey:
 *                   type: string
 *                 mcc:
 *                   type: number
 *                 merchantDescription:
 *                   type: string
 *                 cardPayment:
 *                   type: object
 *                   properties:
 *                     cardNumber:
 *                       type: string
 *                     expiredMonth:
 *                       type: string
 *                     expiredYear:
 *                       type: string
 *                     cvv:
 *                       type: string
 *                     cardPing:
 *                       type: string
 *                     shouldSaveCard:
 *                       type: boolean
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
