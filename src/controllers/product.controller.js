const ProductServices = require("../services/product.service");

const createProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, availableQty, status, image } = req.body;
    const result = await ProductServices.create(
      name,
      price,
      availableQty,
      status,
      image,
      id
    );
    res.status(201).json({ message: "product created" });
  } catch (error) {
    //res.status(400).json(error.message);
    next(error);
  }
};

const getProductWithUser = async (req, res) => {
  try {
    const result = await ProductServices.getWithUser();
    res.json(result);
    // res.json({
    //     message: "Listando productos con unidades disponibles y con el usuario que lo creo",
    //     data: result,
    // });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      details: error.stack,
    });
  }
};

module.exports = {
  createProduct,
  getProductWithUser,
};
