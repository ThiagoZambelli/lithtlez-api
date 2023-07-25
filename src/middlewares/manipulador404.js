import PaginaNaoEncontrada from "../erros/PaginaNaoEncontrada.js";

/* eslint-disable no-unused-vars */
function manipulador404(req, res, next) {
  const erro404 = new PaginaNaoEncontrada();
  next(erro404);
}

export default manipulador404;