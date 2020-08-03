import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import logo from '../../assets/4.png';
import api from '../../services/api';
//API PARA PEGAR CEP
//import ViaCep from 'react-via-cep';

export default function Register({navigation: {navigate}}) {
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [dados, setDados] = useState({});
  async function handleRegister() {
    try {
      if (name.length === 0 || name == '') {
        alert('Preencha o Campo nome');
      } else if (cpf.length === 0 || cpf == '') {
        alert('Preecnha o campo CPF');
      } else if (cep.length === 0 || cep == '') {
        alert('Preecnha o campo CEP');
      } else if (endereco.length === 0 || endereco == '') {
        alert('Preencha o Campo ENDEREÇO');
      } else if (cidade.length === 0 || cidade == '') {
        alert('Preecnha o campo CIDADE');
      } else if (senha.length === 0 || senha == '') {
        alert('Preencha o Campo SENHA');
      }

      const response = await api.post('/user', {
        cidade: cidade,
        endereco: endereco,
        cpf: cpf,
        cep: cep,
        name: name,
        senha: senha,
      });
      alert('Cadastrado com sucesso');
      console.log(response);
      setCep('');
      setCidade('');
      setCpf('');
      setEndereco('');
      setName('');
      setSenha('');
      
    } catch (error) {
      console.log('Erro na função Registrar ' + error);
    }
  }

  function HandleLogin() {
    navigate('Login');
  }

  const buscarCep = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        //desestruturação
        const {cep, bairro} = data;
        //Pegando o objeto do CEP pela API
        setDados({dados: data});
        console.log(dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.backgroud}>
        <View style={styles.containerLogo}>
          <Image source={logo} />
        </View>
        <Text style={styles.textCadastro}>Cadastro</Text>
        <View style={styles.containerInput}>
          <Text style={styles.TextInformativo}>Nome Completo</Text>
          <TextInput
            style={styles.inputText}
            outoCapitalize="none"
            placeholder="digite seu nome completo"
            maxLength={50}
            value={name}
            onChangeText={setName}
          />
          <Text style={styles.TextInformativo}>Cpf</Text>
          <TextInput
            style={styles.inputText}
            outoCapitalize="none"
            placeholder="digite seu CPF"
            maxLength={50}
            keyboardType="numeric"
            value={cpf}
            onChangeText={setCpf}
          />

          <Text style={styles.TextInformativo}>Cep</Text>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            outoCapitalize="none"
            placeholder="digite o cep da sua rua"
            maxLength={50}
            value={cep}
            onChangeText={setCep}
          />
          <Text style={styles.TextInformativo}>Endereço</Text>
          <TextInput
            style={styles.inputText}
            outoCapitalize="none"
            placeholder="digite seu rndereço"
            value={endereco}
            onChangeText={setEndereco}
          />
          <Text style={styles.TextInformativo}>Cidade</Text>
          <TextInput
            style={styles.inputText}
            outoCapitalize="none"
            placeholder="digite sua cidade"
            value={cidade}
            onChangeText={setCidade}
          />
          <Text style={styles.TextInformativo}>Digite sua senha</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            outoCapitalize="none"
            placeholder="senha"
            value={senha}
            onChangeText={setSenha}
          />
          <View>
            <Text>Endereço:{dados.logradouro}</Text>
          </View>
          <TouchableOpacity
            style={styles.buttonToucha}
            onPress={handleRegister}>
            <Text style={styles.TextButton}>Registrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={HandleLogin}>
            <Text style={styles.LoginText}>Fazer login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonToucha} onPress={buscarCep}>
            <Text style={styles.TextButton}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: '#dddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    backgroundColor: '#dddd',
    height: 300,
    marginTop: 20,
    marginVertical: 30,
    flex: 1,
    justifyContent: 'center',
  },
  textCadastro: {
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  TextInformativo: {
    fontFamily: 'lucida grande',
    marginTop: 5,
    width: '85%',
    marginBottom: 5,
    fontSize: 15,
  },
  InputCep: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  inputText: {
    padding: 10,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    fontSize: 17,
  },
  buttonToucha: {
    width: '90%',
    marginTop: 25,
    height: 46,
    backgroundColor: '#13374a',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 25,
  },
  TextButton: {
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  LoginButton: {
    marginTop: 10,
  },
  LoginText: {
    color: '#030303',
  },
});
