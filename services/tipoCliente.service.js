const tipoClienteModel = require("../models/tipoCliente.model");//se imporat el modelo, importante para usar funciones de consulta a la BD

const consultarTodos = async () => {
  return await tipoClienteModel.find();
}

module.exports = {
 consultarTodos
}
