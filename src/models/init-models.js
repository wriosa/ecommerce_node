const DataTypes = require("sequelize").DataTypes;
const _car = require("./car");
const _order = require("./order");
const _product = require("./product");
const _productInCar = require("./product_in_car");
const _productInOrder = require("./product_in_order");
const _users = require("./users");

function initModels(sequelize) {
  const car = _car(sequelize, DataTypes);
  const order = _order(sequelize, DataTypes);
  const product = _product(sequelize, DataTypes);
  const product_in_car = _productInCar(sequelize, DataTypes);
  const product_in_order = _productInOrder(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  product_in_car.belongsTo(car, { as: "cart", foreignKey: "cartId"});
  car.hasMany(product_in_car, { as: "product_in_cars", foreignKey: "cartId"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "orderId"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "orderId"});
  product_in_car.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(product_in_car, { as: "product_in_cars", foreignKey: "productId"});
  product_in_order.belongsTo(product, { as: "product", foreignKey: "productId"});
  product.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "productId"});
  car.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(car, { as: "cars", foreignKey: "userId"});
  order.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(order, { as: "orders", foreignKey: "userId"});
  product.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(product, { as: "products", foreignKey: "userId"});

  return {
    car,
    order,
    product,
    product_in_car,
    product_in_order,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
