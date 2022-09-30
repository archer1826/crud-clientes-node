const { Router } = require("express"); //necesario para poder imporatr las rutas del controlador al servidor
const router = Router();

const { consultarTodos } = require("../services/tipoCliente.service");

const endPoint = "/api/tipoCliente";

//req = request, de aqui se puede obtener datos de la peticion, como params, headres o el body
//res = de aqi se emite la respuesta con .json y su .status(codigoHttp)

//metodo que consulta todos los tipos de cliente
router.get(`${endPoint}/consultar/todos`, async (req, res) => {
  const tipoClientes = await consultarTodos();
  res.status(200).json({
    tipoClientes
  });
});

module.exports = router;