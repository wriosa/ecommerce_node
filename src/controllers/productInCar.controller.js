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
    const {id} = car;
    const findProductIncCar = await ProductInCarService.find(productId, id);
    console.log(findProductIncCar);
    if(!findProductIncCar){
      const productInCar = await ProductInCarService.add(id,productId,quantity,price,status)
      if(productInCar){
        const {cartId,price, productId, quantity} = productInCar;
        await CarService.update(cartId,price)
        await ProductServices.update(productId, quantity)
        res.status(201).json({message: "Product added to cart"});
      }   
    }else{
      const {productId} = findProductIncCar;
      await ProductInCarService.update(productId,quantity,price);
      res.status(201).json({message: "Product update in the cart"});
    }       
  } catch (error) {
    next(error);
  }
};

const getProductsUser= async (req,res, next)=>{
  try {
    const {userId} = req.params;
    const car = await CarService.getAll(userId);
    if(car){
      const {id} = car;
      const result = await ProductInCarService.getProductsInCar(id);
      console.log(result)
      res.json(result);
    }
    
  } catch (error) {
    next(error);
  }
}

module.exports = { 
  addProcuctInCar ,
  getProductsUser,
};
