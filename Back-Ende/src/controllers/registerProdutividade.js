const BD = require("../model/db");
module.exports = {
  async store(req, res) {
    const {
      NomeTecnico,
      NomeObra,
      PeriodoObra,
      CondicoesTempo,
      Acidentes,
      CondicoesArea,
      TempoInicio,
      TempoTermino,
      TempoExtra,
    } = req.body;

    const produtividade = await BD.create({
      CondicoesTempo: CondicoesTempo,
      NomeTecnico: NomeTecnico,
      NomeObra: NomeObra,
      PeriodoObra: PeriodoObra,
      Acidentes: Acidentes,
      CondicoesArea: CondicoesArea,
      TempoInicio: TempoInicio,
      TempoTermino: TempoTermino,
      TempoExtra: TempoExtra,
    });
    if (!produtividade) {
      return res.json({erro:"Schemma Vazio"})
    }
    return res.json({ produtividade });
  },
};
