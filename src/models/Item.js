import mongoose from "mongoose";

// O Schema é responsavel determinar os dados que serão comunicados com o db, e por setar o arquivo expecifico
const itemSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "O nome é obrigatório"] },
    raridade: { type: String, required: [true, "A raridade é obrigatório"] },
    descricao: { type: String, required: [true, "A descrição é obrigatório"] },
    tipo: { type: String, required: [true, "O tipo é obrigatório"] },
    string: {
      type: String,
      enum: {
        values: ["tem enum", "não tem enum"],
        message: "A estring '{VALUE}' fornecida não é permitida"
      }
    },
    numero: {
      type: Number,
      min: [2, "O numero deve estar entre 2 e 10"],
      max: [10, "O numero deve estar entre 2 e 10"]
    },
    validaDorPersonalizado: {
      type: Number,
      validate: {
        validator: (numero) => {
          return numero >= 7 && numero <= 9;
        },
        message: "O numero deve estar entre 7 e 9. O numero {VALUE} é"
      }
    }
  }
);

// implementação do modelo ao arquivo expecifico (P.S se o arquivo não tiver sido criado ate o momente ele sera assim que a primeira conexão for feita)
const itens = mongoose.model("itens", itemSchema);


export default itens;