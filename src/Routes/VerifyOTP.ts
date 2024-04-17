import express from "express";
import VerifyOtp from "../controller/VerifyOtp.js";

const VerifyOtpRouter = express.Router();

/**
 * @swagger
 * /verify-otp:
 *   get:
 *     tags:
 *       - Auth
 *     summary: Verify OTP
 *     description: Verify the OTP for a user
 *     parameters:
 *       - in: query
 *         name: user
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - in: query
 *         name: otp
 *         required: true
 *         description: One Time Password
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: OTP verification successful
 *       '400':
 *         description: Invalid request parameters
 *       '500':
 *         description: Internal server error
 */
VerifyOtpRouter.get("/verify-otp", VerifyOtp);

export default VerifyOtpRouter;
