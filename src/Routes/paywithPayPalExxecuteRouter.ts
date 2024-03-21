import express from "express";
import executePaymentPayPal from "../controller/PayPal/executePaymentPaypal.js";

const paywithPayPalExecuteRouter = express.Router();
/**
 * @openapi
 * '/api/paypal/execute{paymentId}/{PayerID}':
 *   get:
 *     tags:
 *       - Payment
 *     summary: Execute PAYPAL Payment
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *         description: The ID of the payment.
 *         schema:
 *           type: string
 *       - in: path
 *         name: PayerID
 *         required: true
 *         description: The ID of the payer.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Payment details retrieved successfully.
 *       '404':
 *         description: Payment or payer not found.
 *       '500':
 *         description: Internal server error. Failed to retrieve payment details.
 */

paywithPayPalExecuteRouter.get("/api/paypal/execute", executePaymentPayPal);

export default paywithPayPalExecuteRouter;
