import mongoose from "mongoose";

const NewSchema = new mongoose.Schema({
  id: { type: String, },
  titulo: { type: String, required: true },
  paragrafos: { type: [{ type: String }], required: true },
  alert: { type: Boolean },
  createdAt: {
    type: Date,
    default: () => new Date().setHours(0, 0, 0, 0) // Define somente a data sem horas
  }
});

const New = mongoose.model("news", NewSchema);
export default New;