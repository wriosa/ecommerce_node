const models = require("../models");
const { product_in_order } = models;

class ProductInOrderService {
  static async add(id, productId, quantity, price) {
    try {
      const result = await productId.forEach((product) => {
        product_in_order.create({ orderId: id, productId: product, quantity, price});
      });
      // const result = await product_in_order.create({orderId:id,
      // productId, quantity, price});
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductInOrderService;
