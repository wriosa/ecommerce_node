const { Op } = require("sequelize");
const { users } = require("../models");
const models = require("../models");

class ProductServices {
  static async create(name, price, availableQty, status, image, id) {
    try {
      const result = await models.product.create({
        name:name,
        price: price,
        availableQty: availableQty,
        status: status,
        image: image,
        userId:id
      } );
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithUser() {
    try {
      const result = await models.product.findAll({
        where: {
          availableQty: { [Op.gt]: 0 },
        },
        include: {
          model: users,
          as: "user",
          attributes: ["username"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll(productId) {
    try {
      const result = await models.product.findOne({
        where:{ 
          id:productId
         },
      });
      return result;
    } catch (error) {
      throw error;
    }
  } 

  static async update(productId, quantity){
    try {
      const result = await models.product.decrement({availableQty: quantity}, { where: { id: productId } })
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductServices;
