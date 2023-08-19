import mongoose from "mongoose";
import HabilidadeSchema from "./Habilidade.js";

const PersonagemSchema = mongoose.Schema({
  nomePersonagem:{type:String, required:[true, "O nomePersonagem é requerido!"]},
  nomeJogador:{type:String, required:[true, "O nomeJogador é requerido!"]},
  raca:{type: mongoose.Schema.Types.ObjectId, ref:"races", required:true},
  subRaca:{type:{
    nome: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    habilidades: [HabilidadeSchema]
  }},
  classe:{type: mongoose.Schema.Types.ObjectId, ref:"classe", required:true},
  antecedente:{type: mongoose.Schema.Types.ObjectId, ref:"antecedente", required:true},
});

const Personagem = mongoose.model("personagem", PersonagemSchema);

export default Personagem;