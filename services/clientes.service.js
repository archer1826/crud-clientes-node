//modelo s de bd
const clienteModel = require("../models/clientes.model"); //se imporat el modelo, importante para usar funciones de consulta a la BD
const tipoClienteModel = require("../models/tipoCliente.model");

//dto's
const PaginacionDto = require("../dto/paginacion.dto");
const ClienteDto = require("../dto/cliente.dto");

//utils
const { setPagina } = require("../utils/validaPaginacion");

//metodo que consulta todos los clientes paginado
const consultarTodos = async (registros = 5, pagina = 0) => {
  console.log("inciio consukta de todos los clientes");
  pagina = setPagina(registros, pagina);

  const [cliente, total] = await Promise.all([
    clienteModel.find().sort() //con solo find se bsucan todos
    .skip(pagina) //determina desde que registro buscar
    .limit(registros), //determina cuanstos deben verse
    clienteModel.countDocuments()
  ]);

  const clienteDto = await armarDto(cliente);
  const respuesta = new PaginacionDto(total, clienteDto);
  return respuesta;
};

//metodo que arma el dto de cliente
const armarDto = async (listaClientes) => {
  console.log("inicio armado de dto");
  const clientes = new Array();
  for(const element in listaClientes){
   const tipoCliente = await tipoClienteModel.findById(listaClientes[element].tipoCliente);
   clientes.push(
    new ClienteDto(
      listaClientes[element]._id,
      listaClientes[element].nombre,
      listaClientes[element].correo,
      listaClientes[element].nit,
      listaClientes[element].estado,
      tipoCliente
    )
   )
  }
  console.log("finalizo armado de dto");
  return clientes;
};


//metodo que crea un cliente
const crearCliente = async (clienteDto) => {
  const cliente = new clienteModel(clienteDto);
  return await cliente.save();
};

//metodo que edita un cliente
const editarCliente = async (clienteDto) => {
  const { id, ...cliente } = clienteDto;
  return await clienteModel.findByIdAndUpdate(id, cliente);
};

module.exports = {
  consultarTodos,
  crearCliente,
  editarCliente
};
