const { Router } = require("express");
const { createdOrder } = require("../controllers/productInOrder.controller");

const router = Router();

 
router.post("/:userId", createdOrder);


module.exports = router; 