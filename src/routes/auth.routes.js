//registro
//login
const { Router } = require("express");
const {register} = require("../controllers/auth.controller");
const { login } = require("../controllers/auth.controller");
const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: Create a new user into application
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: user created
 *       400:
 *         description: Validation error
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: Login an existing user into the app
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to login a existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       400:
 *         description: Not found
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: User not found / Not email provided / Not password provided / Something wrong
 *       200:
 *         description: OK
 *         content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/loginResponse"
 */

router.post("/register", register);
router.post("/login", login);

module.exports = router;
