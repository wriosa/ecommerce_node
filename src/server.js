const swaggerDocs = require("../swagger");
const app = require("./app");
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  swaggerDocs(app,PORT);
});