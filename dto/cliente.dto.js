class ClienteDto {
  constructor(id, nombre, correo, nit, estado, tipoCliente){
   this.id = id;
   this.nombre = nombre;
   this.correo = correo;
   this.nit = nit;
   this.estado = estado;
   this.tipoCliente = tipoCliente;
  }
}

module.exports = ClienteDto;