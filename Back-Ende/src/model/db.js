const { Schema, model } = require("mongoose");
const ProdutividadeSchema = new Schema({
  NomeTecnico: {
    type: String,
    required: true,
  },
  NomeObra: {
    type: String,
    required: true,
  },
  PeriodoObra: {
    type: String,
    required: true,
  },
  CondicoesTempo: {
    type: String,
    required: true,
  },
  Acidentes: {
    type: String,
    required: true,
  },
  CondicoesArea: {
    type: String,
    require: true,
  },
  TempoInicio: {
    type: String,
    require: true,
  },
  TempoTermino: {
    type: String,
    require: true,
  },
  TempoExtra:{
      type:String,
      require:true
  },
  
});
module.exports = model("Produtividade", ProdutividadeSchema);
