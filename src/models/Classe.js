import mongoose from "mongoose";
import HabilidadeSchema from "./Habilidade.js";

const ClasseSchema = new mongoose.Schema({
  id:{
    type: String,    
    // Nome da classe
  },
  nome: {
    type: String,
    required: true,
    // Nome da classe
  },
  descricao: {
    type: String,
    required: true,
    // Descrição da classe
  },
  dadoVida: {
    type: Number,
    required: true,
    // Dado de vida da classe
  },
  armaduraProf: {
    type: String,
    required: true,
    // Armaduras permitidas pela classe
  },
  armaProf: {
    type: String,
    required: true,
    // Armas permitidas pela classe
  },
  testeResistencia: [{
    type: String,
    required: true,
    // Teste de resistência da classe (pode ter mais de um)
  }],
  listaPericias: {
    type: String,
    required: true,
    // Lista de perícias disponíveis para escolher (escolha 2 entre Arcana, History, Investigation, Medicine, Nature, Perception e Sleight of Hand)
  },
  habilidades: [HabilidadeSchema],
});

const Classe = mongoose.model("classe", ClasseSchema);

export default Classe;