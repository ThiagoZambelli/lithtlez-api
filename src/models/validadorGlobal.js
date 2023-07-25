import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (valor) => valor !== "",
  message: ({path}) => `O campo ${path} esta vazio. Não são permitidos campos vazios.`
});