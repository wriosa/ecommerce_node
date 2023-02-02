const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return product.init(sequelize, DataTypes);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     createproduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Celular samsung
 *         price:
 *           type: double
 *           example: 1550000
 *         availableQty:
 *           type: integer
 *           example: 10
 *         status:
 *           type: boolean
 *           example: true
 *         image:
 *           type: string
 *           example: http:image1.com.co
 *     getproductwithuser:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: int
 *             example: 1
 *           name:
 *             type: string
 *             example: Portatil ASUS
 *           price:
 *             type: double
 *             example: 1500000
 *           availableQty:
 *             type: int
 *             example: 10
 *           status:
 *             type: boolean
 *             example: true
 *           image:
 *             type: string
 *             example: http:image1.com.co
 *           userId:
 *             type: int
 *             example: 1
 *           user:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Wolfgang
 *     createproductresponsecorrect:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: product created
 *     createproductresponseerror:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Validation error
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

class product extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}



