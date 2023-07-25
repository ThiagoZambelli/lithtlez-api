import ErroBase from "./ErroBase.js";


class PaginaNaoEncontrada extends ErroBase {
  constructor(menssagem = "Pagina não encontrada") {
    super(menssagem, 404);
  }
}

export default PaginaNaoEncontrada;