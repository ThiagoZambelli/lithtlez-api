import mongoose from "mongoose";

const ContoSchema = mongoose.Schema({
  titulo: { type: String, required: [true, "O conto deve ter um Titulo"] },
  capitulos:[CapituloSchema],
});

const CapituloSchema = new mongoose.Schema({
  tituloCap: { type: String, required: [true, "O capitulo deve ter um Titulo"] },
  conteudo: { type: String, required: [true, "O capitulo deve ter um conteudo"] }
});

const Conto = mongoose.model("contos", ContoSchema);

export default Conto;