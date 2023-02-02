const { Router } = require("express");
const { createProduct, getProductWithUser } = require("../controllers/product.controller");

const router = Router();

/**
 * @openapi
 * /api/v1/product/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
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
 *             $ref: '#/components/schemas/createproduct'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createproductresponsecorrect'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createproductresponseerror'
 * /api/v1/availableProducts:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtain a list of available products and the user who created it
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getproductwithuser'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/createproductresponseerror'
 */

router.post("/:id", createProduct);
router.get("/", getProductWithUser);


module.exports = router;






