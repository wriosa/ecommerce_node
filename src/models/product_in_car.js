const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product_in_car.init(sequelize, DataTypes);
}
/**
 * @openapi
 * components:
 *   schemas:
 *     addProductInCar:
 *       type: object
 *       properties:
 *         productId:
 *           type: int
 *           example: 1
 *         quantity:
 *           type: int
 *           example: 1
 *         status:
 *           type: boolean
 *           example: true
 *     addproductincarresponsecorrect:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Product added to cart or product updated in cart
 *     addproductincarresponseerror:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Validation error
 *     getproductInCar:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           quantity:
 *             type: int
 *             example: 10
 *           price:
 *             type: double
 *             example: 1500000
 *           product:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Phone
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

class product_in_car extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'car',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product_in_car',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "productInCar_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
