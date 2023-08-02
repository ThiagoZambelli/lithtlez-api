import mongoose from "mongoose";

const AntecedentesSchema = mongoose.Schema({
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
});

const Antecedente = mongoose.model("antecedente", AntecedentesSchema);

export default Antecedente;