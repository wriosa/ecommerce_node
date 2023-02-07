const { Router } = require("express");
const { createdOrder } = require("../controllers/productInOrder.controller");

const router = Router();

 
router.get("/:userId", createdOrder);


module.exports = router; 