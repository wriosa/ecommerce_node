const models = require("../models");
const { product_in_car, product } = models;

class ProductInCarService {
  static async add(id,productId,quantity, price, status) {
    try {
      const result = await product_in_car.create({
        cartId: id,
        productId: productId,
        quantity: quantity,
        price: (quantity*price),
        status: status,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getProductsInCar(id){
    try {
      const result = await product_in_car.findAll({
        where:{ 
          cartId:id
         },
         include: {
          model: product,
          as: "product",
          attributes: ["name"],
        },
        attributes: {
          exclude: ["cartId", "status", "id", "productId"],
        },
      });
      return result;
    } catch (error) {
      
    }
  }

  static async find(productId, id){
    try {
      const result = await product_in_car.findOne({
        where:{ 
          productId: productId,
          cartId: id
         },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(productId, quantity,price){
    try {
      const result = await product_in_car.increment({quantity: quantity, price:price}, { where: { productId: productId } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInCarService;
