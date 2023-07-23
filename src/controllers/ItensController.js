// O controller e responsavel por criar os metodos executados

// importação do model, responsavel pela criação do modelo e da coneção com o arquivo não relacional expecifico
import itens from "../models/Item.js";

// cada um dos metodos da classe serão chamados em um dos verbos http
class ItemController {
  static listarItens = async (req, res, next) => {
    try {
      const resultado = await itens.find();
      res.status(200).json(resultado);
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
      if (updatedItem) {
        res.status(200).json({ message: "Item atualizado com sucesso!", item: updatedItem });
      } else {
        res.status(404).json({ message: "Item não encontrado." });
      }
    } catch (err) {
      next(err);
    }

  };
  static pegarItemPorId = async (req, res, next) => {
    const id = req.params.id;
    try {
      const itemEncontrado = await itens.findById(id);
      if (itemEncontrado !== null) {
        res.status(200).json(itemEncontrado);
      } else {
        res.status(204).json({ menssage: "item não encontrado" });
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

}

export default ItemController;

