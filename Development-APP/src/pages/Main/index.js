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

export default function Main({navigation: {navigate}}) {


  return (
    <SafeAreaView style={styles.backgroud}>
    <Text>PAGINA MAIN</Text>
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
