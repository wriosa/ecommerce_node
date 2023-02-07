const models = require('../models');
const {order} = models;

class OrderService{
  static async add(userId){
    try {
      const result = await order.create({userId});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderService;