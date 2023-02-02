//const { product } = require("../models");
const CarService = require("../services/car.service");
const ProductServices = require("../services/product.service");
const ProductInCarService = require("../services/productInCar.service");

const addProcuctInCar = async (req, res, next) => {
  try {
    const {productId, quantity,status} = req.body;
    const product = await ProductServices.getAll(productId);
    const {price} = product;
    const {userId} = req.params;
    const car = await CarService.getAll(userId);
    const {id, totalPrice} = car;
    const productInCar = await ProductInCarService.add(id, productId,quantity,price,status)
    if(productInCar){
      const {cartId,price, productId, quantity} = productInCar;
      await CarService.update(cartId,price)
      await ProductServices.update(productId, quantity)
      res.status(201).json({message: "Product added to cart"});
    }       
  } catch (error) {
    //res.status(400).json(error.message);
    next(error);
  }
};

const getProductsUser= async (req,res, next)=>{
  try {
    const {userId} = req.params;
    const car = await CarService.getAll(userId);
    // console.log(car)
    if(car){
      const {id} = car;
      // console.log(id)
      const result = await ProductInCarService.getProductsInCar(id);
      console.log(result)
      res.json(result);
      // res.json({
      //     message: "Listando los productos que tiene el usuario en el carrito",
      //     data: result,
      // });
    }
    
  } catch (error) {
    //res.status(400).json(error.message);
    next(error);
  }
}

module.exports = { 
  addProcuctInCar ,
  getProductsUser,
};
