const tipoClienteModel = require("../models/tipoCliente.model");

//valida si el tipo de cliente recibido existe en bd
const esTipoClienteValido = async (tipoCliente) => {
  try {
      const existeTipoCliente = await tipoClienteModel.findById(tipoCliente);
    if (!existeTipoCliente) {
      throw new Error(
        `El id de tipo cliente ${existeTipoCliente}, no esta registrado en la base de datos`
      );
    } 
  } catch (error) {
    throw new Error(
      `Ha ocurrido un error al consultar por id el tipo de cliente, id no contiene la estructura correcta leida por la BD`
    );
  }
};

module.exports = {
  esTipoClienteValido,
};
