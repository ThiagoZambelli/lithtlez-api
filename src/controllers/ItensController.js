// tratamento de erro para paginas não encontradas.
import PaginaNaoEncontrada from "../erros/PaginaNaoEncontrada.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

// O controller e responsavel por criar os metodos executados

// importação do model, responsavel pela criação do modelo e da coneção com o arquivo não relacional expecifico
import { itens } from "../models/index.js";

// cada um dos metodos da classe serão chamados em um dos verbos http
class ItemController {
  static listarItens = async (req, res, next) => {
    try {
      const resultado = await itens.find()
        .sort({nome: 1});
      res.status(200).json(resultado);
    } catch (err) {
      next(err);
    }
  };
  static itensPorVez = async (req, res, next) => {
    try {
      let { limite = 5, pagina = 1 } = req.query;
      limite = parseInt(limite);
      pagina = parseInt(pagina);

      if(limite > 0 && pagina > 0){
        const resultado = await itens.find()
          .skip((pagina - 1) * limite)
          .limit(limite);
        res.status(200).json(resultado);
      } else {
        next(new RequisicaoIncorreta());
      }      
    } catch (err) {
      next(err);
    }
  };
  static cadastrarItem = async (req, res, next) => {
    try {
      let item = new itens(req.body);
      await item.save();

      res.status(201).json({ message: "Item Cadastrado com sucesso." });
    }
    catch (err) {
      next(err);
    }
  };
  static atualizarItem = async (req, res, next) => {
    const id = req.params.id;
    try {
      //            O $set neste caso serve para modificar apenas os campos expecificados no Obj. 
      //          Ja o { new: true } expecifica que queremos o retorno do dcumento aos a tualização
      const updatedItem = await itens.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (updatedItem !== null) {
        res.status(200).json({ message: "Item atualizado com sucesso!", item: updatedItem });
      } else {
        next(new PaginaNaoEncontrada("Id não Encontrado"));
      }
    } catch (err) {
      next(err);
    }

  };
  // pegamos o id como parte dos params, faço um findById pro server. 
  // 
  static pegarItemPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const itemEncontrado = await itens.findById(id);
      if (itemEncontrado !== null) {
        res.status(200).json(itemEncontrado);
      } else {
        next(new PaginaNaoEncontrada("Id não Encontrado"));
      }
    }
    catch (err) {
      next(err);
    }
  };
  static deletarItemPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      await itens.findByIdAndDelete(id);
      res.status(203).json({ menssage: "Item deletado" });
    }
    catch (err) {
      next(err);
    }
  };
  static filtrarItem = async (req, res, next) => {
    try {
      const { raridade, nome, tipo } = req.query;

      // cria uma regex, o 'i' é utilizado para que não haja diferenciação entre maiusculas e minusculas.
      // const regex = new RegExp(nome, "i");

      const busca = {};
      if (raridade) busca.raridade = raridade;
      if (nome) busca.nome = { $regex: nome, $options: "i" };
      if (tipo) busca.tipo = tipo;

      const itensFiltrados = await itens.find(busca);

      res.status(200).send(itensFiltrados);
    }
    catch (err) {
      next(err);
    }
  };

}

export default ItemController;
