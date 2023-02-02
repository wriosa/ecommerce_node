const { Router } = require("express");
const { addProcuctInCar, getProductsUser } = require("../controllers/productInCar.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/addToCar/{userId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add a product to cart
 *     tags:
 *       - Car
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: userId
 *     requestBody:
 *       description: Required field into body request to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductInCar'
 *     responses:
 *       201:
 *         description: Added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addproductincarresponsecorrect'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addproductincarresponseerror'
 * /api/v1/getProducts/{userId}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Check the products that the user has in the shopping cart
 *     tags:
 *       - Car
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: userId
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getproductInCar'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/addproductincarresponseerror'
 */

router.post("/:userId", addProcuctInCar);
router.get("/:userId", getProductsUser );


module.exports = router; 