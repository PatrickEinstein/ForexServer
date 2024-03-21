import express from "express";
import createPaymentStripeEditable from "../controller/Stripe/createPaymentStripeEditable.js";

const paywithStripeEditableCreateRouter = express.Router();
/**
 * @openapi
 * '/api/stripe/createEditable':
 *   post:
 *     tags:
 *       - Payment
 *     summary: pay with STRIPE HOSTED-CHECKOUT ---- NOTE THIS ENDPOINT IS NOT FOR YOU
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
 *               token:
 *                 type: string
 *                 description: The token representing the payment source.
 *             required:
 *               - amount
 *               - token
 *     responses:
 *       '200':
 *         description: Payment processed successfully.
 *       '400':
 *         description: Bad request. Invalid input provided.
 *       '500':
 *         description: Internal server error. Failed to process payment.
 */

paywithStripeEditableCreateRouter.post(
  "/api/stripe/createEditable",
  createPaymentStripeEditable
);

export default paywithStripeEditableCreateRouter;
