import mongoose from "mongoose";

const opiniaoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: [true, "O nome é obrigatório"] },
  email: { type: String, required: [true, "O email é obrigatório"] },
  texto: { type: String, required: [true, "O texto é obrigatório"] },
});

const Opiniao = mongoose.model("opinioes", opiniaoSchema);

export default Opiniao;
