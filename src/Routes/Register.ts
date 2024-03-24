import express from 'express';
import RegisterUser from '../controller/RegisterUser.js';

const RegisterRouter = express.Router()


/**
 * @openapi
 * paths:
 *   /api/registerUser:
 *     post:
 *       tags:
 *         - Auth
 *       summary: Register a new user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 age:
 *                   type: integer
 *                   minimum: 0
 *                 DateOfBirth:
 *                   type: string
 *                   format: date
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                   format: password
 *                 role:
 *                   type: string
 *                   enum: [admin, user]
 *                 subscription:
 *                   type: string
 *                   enum: [basic, premium]
 *                 experience:
 *                   type: string
 *                 years_of_trading:
 *                   type: integer
 *                   minimum: 0
 *       responses:
 *         201:
 *           description: User successfully registered
 *         400:
 *           description: Invalid input, check request body for errors
 */
RegisterRouter.post("/api/registerUser",RegisterUser)

export default RegisterRouter