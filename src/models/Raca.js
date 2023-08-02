import mongoose from "mongoose";
import HabilidadeSchema from "./Habilidade.js";


const SubRacaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  habilidades: [HabilidadeSchema]
});

const RacaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  habilidades: [HabilidadeSchema],
  subRaca: [SubRacaSchema],
});

const Raca = mongoose.model("races", RacaSchema);

export default Raca;