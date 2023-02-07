//importar el servicio
const OrderService = require("../services/order.service");
const ProductInOrderService = require("../services/productInOrder.service");
const transporter = require("../utils/mailer");

const createdOrder = async (req, res, next)=>{
  try {
    const {userId} = req.params;
    const order = await OrderService.add(userId);
    const {id} = order;
    const {productId, quantity, price} = req.body;
    const productOrder = await ProductInOrderService.add(id, productId, quantity, price);
    res.json(productOrder)
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