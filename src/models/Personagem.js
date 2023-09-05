import mongoose from "mongoose";
import HabilidadeSchema from "./Habilidade.js";

const PersonagemSchema = mongoose.Schema({
  nomePersonagem: { type: String, required: [true, "O nomePersonagem é requerido!"] },
  nomeJogador: { type: String, required: [true, "O nomeJogador é requerido!"] },
  raca: { type: mongoose.Schema.Types.ObjectId, ref: "races", required: true },
  subRaca: {
    type: {
      nome: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: true
      },
      habilidades: [HabilidadeSchema]
    }
  },
  atributos: { type: [Number], validate: [atributosValidator, "Os atributos devem ter 6 números"] },
  pericias: { type: [String]},
  img: { type: String},
  classe: { type: mongoose.Schema.Types.ObjectId, ref: "classe", required: true },
  antecedente: { type: mongoose.Schema.Types.ObjectId, ref: "antecedente", required: true },
});

function atributosValidator(val) {
  return val.length === 6 && val.every(num => typeof num === "number");
}

const Personagem = mongoose.model("personagem", PersonagemSchema);

export default Personagem;