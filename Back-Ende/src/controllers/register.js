const axios = require("axios");

const BD = require("../model/db");
module.exports = {
  async store(req, res) {
    const { name } = req.body;
    const { cpf } = req.body;
    const { endereco } = req.body;
    const { senha } = req.body;
    const { cep } = req.body;
    const { cidade } = req.body;
    /* const userExist = await BD.findOne({ name: user });
    if (userExist) {
      return res.jsson(userExist);
    }*/
    const tecnicos = await BD.create({
      name: name,
      cpf: cpf,
      endereco: endereco,
      senha: senha,
      cep:cep,
      cidade:cidade

    });
    console.log(tecnicos)
    return res.json(tecnicos);
  },
};
