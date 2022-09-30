const clienteModel = require("../models/clientes.model");

//valida si el correo del cliente ya existe en bd
const correoExistente = async (correo) => {
  const existeCorreo = await clienteModel.findOne({correo});//cuando se bsuca por algun filtro se be pasar el argiumento como un objeto
  if(existeCorreo){
   throw new Error(`El correo ${correo}, ya esta registrado en la base de datos`);
  }
}

//valida si el nit del cliente ya existe en bd
const nitExistente = async (nit) => {
 const nitExistente = await clienteModel.findOne({nit});//cuando se bsuca por algun filtro se be pasar el argiumento como un objeto
 if(nitExistente){
  throw new Error(`El nit ${nit}, ya esta registrado en la base de datos`);
 }
}

module.exports = {
 correoExistente,
 nitExistente
}