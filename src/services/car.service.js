const models = require('../models');
const {car} = models;

class CarService {
  static async add(userId){
    try {
      const result = await car.create({userId});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(userId) {
    try {
      const result = await car.findOne({
        where:{ 
          userId:userId
         },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(cartId,price){
    try {
      const result = await car.increment({totalPrice: price}, { where: { id: cartId } })
      return result;
    } catch (error) {
      throw error;
    }
  }


}
module.exports = CarService;