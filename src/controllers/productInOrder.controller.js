//importar el servicio
const { car } = require("../models");
const CarService = require("../services/car.service");
const OrderService = require("../services/order.service");
const ProductInOrderService = require("../services/productInOrder.service");
const transporter = require("../utils/mailer");

const createdOrder = async (req, res, next)=>{
  try {
    const {userId} = req.params;
    const orderFind = await OrderService.findOrder(userId);
    console.log(orderFind)
    if(!orderFind){
      const order = await OrderService.add(userId);
      if(order){
        const {userId} = order;
        const car = await CarService.getAll(userId);
        res.json(car)
      }
      res.json(order)
    }else{
      

    }
    //const order = await OrderService.add(userId);
    // const {id} = order;
    // const car = await CarService.getAll(userId);
    // const { id } = c
    // const {productId, quantity, price} = req.body;
    // const productOrder = await ProductInOrderService.add(id, productId, quantity, price);
    //res.json(order)
    // if(productOrder){
    //   res.status(200).json({ message: "Products added" });
    //   await transporter.sendMail({
    //     to: result.email,
    //     from: "wolfgang.ra2@gmail.com",
    //     subject: "Successful purchase",
    //     html: `<h1>Successful purchasecom</h1> <p>Comprastes ${productOrder}</p>`,
    //   });
    // }else {
    //   res.status(400).json({ message: "Something wrong" });
    // }
  } catch (error) {
    next(error)
  }
}  

module.exports = {
  createdOrder,
};