const DB = require("../model/db");

module.exports = {
  async Login(req, res) {
    try {
      const { cpf, senha } = req.body;
      console.log(cpf);
      console.log(senha);
      const user = await DB.findOne({ cpf });
      //validando quando usuario era o CPF , retorna null retornando NULL que dizer que CPF foi digitado errado
      if (!user) {
        console.log("usuário não conectado");
        return res.json({
          erro: "USUARIO NÃO ENCONTRADO, DIGITE CPF NOVAMENTE",
        });
      }

      if (senha != user.senha) {
        console.log("senha incorreta");
        return res.json({ erro: "Erro: senha incorreta" });
      }

      return res.status(200).json({ user });
    } catch (error) {
      return res.status(400).json({ erro: "Incorrect / passwo/user" });
    }
    const { name, cep, cidade } = user;
    console.log(user);
    return res.json({ user });
  },
};
