const setPagina = (registros, pagina) => {
  if (pagina == 1) {
    pagina = 0;
  }
  if (pagina > 1) {
    pagina = pagina * registros - registros;
  }
  return pagina;
};

module.exports = {
 setPagina
}
