import express from "express";
import createPaymentStripe from "../controller/Stripe/createPaymentStripe.js";
const paywithStripeCreateRouter = express.Router();
/**
 * @openapi
 * '/api/stripe/create':
 *   post:
 *     tags:
 *       - Payment
 *     summary: pay with STRIPE CHECKOUT --- NOTE IT HAS TO BE TRIGGERED BY A STRIPE CLIENT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *               productOwner:
 *                 type: string
 *                 description: The owner of the product.
 *               description:
 *                 type: string
 *                 description: Description of the product.
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *               quantity:
 *                 type: integer
 *                 description: The quantity of the product available.
 *             required:
 *               - name
 *               - productOwner
 *               - price
 *               - quantity
 *     responses:
 *       '200':
 *         description: Product created successfully.
 *       '400':
 *         description: Bad request. Invalid input provided.
 *       '500':
 *         description: Internal server error. Failed to create product.
 */
paywithStripeCreateRouter.post("/api/stripe/create", createPaymentStripe);
export default paywithStripeCreateRouter;
