const { Router } = require("express"); //necesario para poder imporatr las rutas del controlador al servidor
const { check } = require("express-validator");//necesario para aplicar validaciones
const router = Router();

//importacion de servicios
const { consultarTodos, crearCliente, editarCliente } = require("../services/clientes.service");

//importacion de valdiaciones de bd
const { esTipoClienteValido } = require("../database/validatorsTipoCliente.db");
const { correoExistente, nitExistente } = require("../database/validatorsClientes.db");

//importacion de validaciones generales 
const { validarCampos } = require("../middlewares/validaCamposGeneral");


const endPoint = "/api/cliente";

//req = request, de aqui se puede obtener datos de la peticion, como params, headres o el body
//res = de aqi se emite la respuesta con .json y su .status(codigoHttp)

//metodo que consulta todos los clientes
router.get(`${endPoint}/consultar/todos`, async (req, res) => {
 const { pagina, registros } = req.headers;
 const { total, results }  = await consultarTodos(registros, pagina);
  res.status(200).json({
   total,
   results
  });
});

//metodo que crea un cliente
router.post(`${endPoint}/crear`, [
 check("nombre", "El nombre es obligatorio").not().isEmpty(),
 check("correo").custom(correoExistente), //no es necesario enviar el parametro, cuando es solo uno solo se ncesita el nombre del metodo
 check("nit").custom(nitExistente),
 check("tipoCliente").custom(esTipoClienteValido),
 validarCampos //se sobre entiende que envia req y res por eso no se pone () de argumentos
], async (req, res) => {
 const cliente = await crearCliente(req.body);
 res.status(201).json({
   cliente
 });
});

//metodo que crea un cliente
router.put(`${endPoint}/editar`, [
 check("nombre", "El nombre es obligatorio").not().isEmpty(),
 //check("correo").custom(correoExistente), //no es necesario enviar el parametro, cuando es solo uno solo se ncesita el nombre del metodo
 //check("nit").custom(nitExistente),
 check("tipoCliente").custom(esTipoClienteValido),
 validarCampos //se sobre entiende que envia req y res por eso no se pone () de argumentos
], async (req, res) => {
 const cliente = await editarCliente(req.body);
 res.status(200).json({
   cliente
 });
});

module.exports = router;