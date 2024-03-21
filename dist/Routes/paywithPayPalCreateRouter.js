import express from "express";
import createPaymentPayPal from "../controller/PayPal/createPaymentPayPal.js";
let paywithPayPalCreateRouter = express.Router();
/**
 * @openapi
 * '/api/paypal/create':
 *   post:
 *     tags:
 *       - Payment
 *     summary: initiate PAYPAL Payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 description: The amount of the payment.
 *               currency:
 *                 type: string
 *                 description: The currency of the payment (e.g., USD, EUR).
 *               description:
 *                 type: string
 *                 description: A description of the payment.
 *             required:
 *               - amount
 *               - currency
 *               - description
 *     responses:
 *       '200':
 *         description: Payment processed successfully.
 *       '400':
 *         description: Bad request. Invalid input provided.
 *       '500':
 *         description: Internal server error. Failed to process payment.
 */
paywithPayPalCreateRouter.post("/api/paypal/create", createPaymentPayPal);
export default paywithPayPalCreateRouter;
