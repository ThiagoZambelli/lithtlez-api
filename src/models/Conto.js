import mongoose from "mongoose";

const CapituloSchema = new mongoose.Schema({
  id: { type: String },
  tituloCap: { type: String, required: [true, "O capitulo deve ter um Titulo"] },
  conteudo: { type: String, required: [true, "O capitulo deve ter um conteudo"] }
});

const ContoSchema = mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: [true, "O conto deve ter um Titulo"] },
  capitulos: [CapituloSchema]
});

const Conto = mongoose.model("contos", ContoSchema);

export default Conto;