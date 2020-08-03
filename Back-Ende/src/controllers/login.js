const DB = require("../model/db");
module.exports = {
  async index(req, res) {
    const { cpf } = req.body;
    const { senha } = req.body;
    console.log(cpf);
    const user = await DB.findOne({ cpf: cpf });
    //validando quando usuario era o CPF , retorna null retornando NULL que dizer que CPF foi digitado errado
    if (!user) {
      return res.json({ erro: "USUARIO NÃO ENCONTRADO, DIGITE CPF NOVAMENTE" });
    }
    if (cpf != user.cpf) {
      return res.json({ erro: "Erro CPF incorreto" });
    }

    if (senha != user.senha) {
      return res.json({ erro: "Erro senha incorreta" });
    }

    const { name, cep, cidade } = user;
    console.log(user);
    return res.json({ user });
  }}
