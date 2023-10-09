import mongoose from "mongoose";

const HabilidadeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  origem: {
    type: String,
    required: true
  }
});

export default HabilidadeSchema;