import mongoose from "mongoose";

// O Schema é responsavel determinar os dados que serão comunicados com o db, e por setar o arquivo expecifico
const itemSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    raridade: { type: String, required: true },
    descricao: { type: String, required: true },
    tipo: { type: String, required: true }
  }
);

// implementação do modelo ao arquivo expecifico (P.S se o arquivo não tiver sido criado ate o momente ele sera assim que a primeira conexão for feita)
const itens = mongoose.model("itens", itemSchema);


export default itens;