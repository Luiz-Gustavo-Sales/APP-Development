const { Schema, model } = require("mongoose");
const ProdutividadeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  cep: {
    type: Number,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});
module.exports = model("Produtividade", ProdutividadeSchema);
