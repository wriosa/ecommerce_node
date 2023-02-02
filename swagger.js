const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require('dotenv').config;

const options = {
  apis: ['./src/routes/auth.routes.js', "./src/models/users.js", './src/routes/product.routes.js', "./src/models/product.js", './src/routes/productInCar.routes.js', "./src/models/product_in_car.js"],
  definition:{
    openapi:"3.0.0",
    info: {
      title: "API ecommerce en node js",
      version: "0.0.9",
      description: "API for the ecommerce"
    }
  }
}

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port)=>{
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.use("/api/v1/docs.json", (req, res)=>{
    res.setHeader({"Content-Type":"application/json"});
    res.send(swaggerSpec)
  });
  console.log(`Documentacion disponible en ${process.env.URL}:${port}/api/v1/docs`)
}

module.exports = swaggerDocs;