const { Schema, model } = require("mongoose");//se impoota lo necesario para crear un modelo
//el schema es la representacion del documento en bd y el modelo es la coneversion de dicho schema a un modelo que sea legible por la bd

const tipoClienteSchema = Schema({
 tipo: {
  type: String,
  required: [true, "El nombre es obligatorio"]
 }
});

module.exports = model("tipo_cliente", tipoClienteSchema);