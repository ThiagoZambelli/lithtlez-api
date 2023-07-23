// import da biblioteca mongoose, responsavel por fazer a conexão com o db MongoDb
import mongoose from "mongoose";

// Conectando com o db mongodb
mongoose.connect(process.env.STRING_CONEXAO_DB);

// crinado a conexão
let db = mongoose.connection;

export default db;