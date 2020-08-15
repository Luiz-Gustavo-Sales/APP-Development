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
//import mobiscroll from '@mobiscroll/react-lite';
import logo from '../../assets/4.png';
import api from '../../services/api';
import Dialog, {
  SlideAnimation,
  DialogContent,
  DialogTitle,
} from 'react-native-popup-dialog';

export default function Login({navigation: {navigate}}) {
  /* const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const lineAnimation = useRef(new Animated.Value(0)).current;
*/
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [menssage, setMenssage] = useState('Login realizado com sucesso');
  //função
  async function HandleLogin() {
    if (cpf.length === 0 || cpf == '') {
      alert('Campo CPF está vazio.');
    }

    if (senha.length === 0 || senha == '') {
      alert('Campo SENHA está vazio.');
    }

    //mandando pela rota post verificar se esse usuário existe

    const response = await api.post('/login', {
      cpf,
      senha

    });
    console.log(response)
    if (!response) {
      console.log("entro na condição")
    }
  }

  function HandleRegister() {
    navigate('Register');
  }
  return (
    <SafeAreaView style={styles.backgroud}>
      <View style={styles.containerLogo}>
        <Image source={logo} />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.TextInformativo}>Digite seu CPF</Text>
        <TextInput
          style={styles.inputText}
          keyboardType="numeric"
          outoCapitalize="none"
          placeholder="digite os numeros do seu CPF"
          maxLength={50}
          value={cpf}
          onChangeText={setCpf}
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

        <TouchableOpacity style={styles.buttonToucha} onPress={HandleLogin}>
          <Text style={styles.TextButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton} onPress={HandleRegister}>
          <Text style={styles.LoginText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  TextInformativo: {
    marginTop: 5,
    width: '85%',
    marginBottom: 5,
    fontSize: 15,
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
