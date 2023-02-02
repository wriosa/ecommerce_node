const ProductInCarService = require("../services/productInCar.service");

const createCar = async (req, res, next) => {
  try {
    const {cartId, productId, quantity, price, status} = req.body;
    
    res.status(201).json({message: 'Producto agregado al carrito'})
  } catch (error) {
    //res.status(400).json(error.message)
    next(error);
  }
};
module.exports = {
  createCar,
}