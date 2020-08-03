import React, { useState } from "react";
import api from "../services/api";
import "./Login.css";
import logo from "../assets/4.png";

export default function Login({ history }) {
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [dados, setDados] = useState({
  });
  async function handlerSubmit(e) {
    //evitando comportamento padrão dro submit do FORM
    e.preventDefault();
    const response = await api.post("/user", {
      name: name,
      cpf: cpf,
      endereco: endereco,
      senha: senha,
      cep: cep,
      cidade: cidade,
    });

  }

  function capturarName(e) {
    setName(e.target.value);
  }

  return (
    <div className="login-container">
      <form onSubmit={handlerSubmit}>
        <img src={logo} alt="TinDev" />
        <input
          placeholder="Digite seu usuário no GitHub"
          value={name}
          //usando fucntion para caputrar o nmae
          onChange={capturarName}
        />
        <input
          placeholder="Digite seu usuário no GitHub"
          value={cep}
          //usando fucntion para caputrar o nmae
          onChange={setCep}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
