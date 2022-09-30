const { Schema, model } = require("mongoose");//se impoota lo necesario para crear un modelo
//el schema es la representacion del documento en bd y el modelo es la coneversion de dicho schema a un modelo que sea legible por la bd

const clienteSchema = Schema({
 nombre: {
  type: String,
  required: [true, "El nombre es obligatorio"]
 },
 correo: {
  type: String,
  required: [true, "El correo es obligatorio"],
  unique: true
 },
 nit: {
  type: String,
  required: [true, "La contraseña es obligatoria"],
  unique: true
 },
 estado: {
  type: Boolean,
  default: true
 },
 tipoCliente: {
  type: String,
  required: [true, "El tipo de cliente es obligatorio"]
 }
});

//metodo que impide enviar todos los datos del model en el json de respuesta por medio de desestructuracion
clienteSchema.methods.toJSON = function (){
 const {__v, ...cliente} = this.toObject();
 return cliente;
}

module.exports = model("cliente", clienteSchema);