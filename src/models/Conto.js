import mongoose from "mongoose";

const CapituloSchema = new mongoose.Schema({
  id: { type: String },
  tituloCap: { type: String, required: [true, "O capitulo deve ter um Titulo"] },
  conteudo: { type: [{ type: String }], required: [true, "O capitulo deve ter um conteudo"] }
});
const ComentarioSchema = new mongoose.Schema({
  id: { type: String },
  texto: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const ContoSchema = mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O conto deve ter um Titulo"] },
  descricao: { type: String, required: [true, "O conto deve ter uma descricao"] },
  capitulos: [CapituloSchema],
  img: { type: String, required: [true, "O conto deve ter uma Imagem"] },
  curtidas: { type: [mongoose.Schema.Types.ObjectId], ref: "users" },
  comentarios: { type: [ComentarioSchema] },
});

const Conto = mongoose.model("contos", ContoSchema);

export default Conto;