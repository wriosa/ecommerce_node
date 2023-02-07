const authMiddleware = require("../middlewares/auth.middleware");
const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const productInCarRoutes = require("./productInCar.routes");
const productInOrderRoutes = require("./productInOrder.routes");
const OrderRoutes = require("./order.routes");
const routerApi = (app) => {
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/product",authMiddleware, productRoutes);
  app.use("/api/v1/availableProducts", productRoutes);
  app.use("/api/v1/addToCar",authMiddleware, productInCarRoutes);
  app.use("/api/v1/getProducts", authMiddleware, productInCarRoutes);
  app.use("/api/v1/addProcuctInOrder", productInOrderRoutes);
  app.use("/api/v1/getOrders", OrderRoutes);
};


module.exports = routerApi;
