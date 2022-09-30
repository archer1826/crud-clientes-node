const mongoose = require('mongoose');//importacion de dependencia mongoose

//metodo que se conecta a la bd
const dbConnection = async () => {

  try {
    await mongoose.connect(process.env.MONGO_DB_CNN);
    console.log("base de datos online");
  } catch(error){
    console.error(error);
    throw new Error("Error al iniciar la base de datos");
  }

}

//se exporta el uso de la bd
module.exports = {
 dbConnection
};