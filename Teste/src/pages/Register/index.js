import React, {useState, useEffect, Component} from 'react';
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
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons';
import {Picker} from '@react-native-community/picker';
//MultiSelect
import MultiSelect from 'react-native-multiple-select';
//import * as Yup from 'yup';
import api from '../../services/api';
import {useForm, Controller} from 'react-hook-form';
//importando logo
import logoSea from '../../assets/logo_sea.png';
//mascara data
import {mascaraData} from '../Components/mascaras/data';
export default function Register({navigation: {navigate}}) {
  //Estado do Input DATA
  const [data, setData] = useState('');
  //Multi Select para pegar nome das equipes
  const [NomeTecnico, setNomeTecnico] = useState([]);
  //pegando valor do Select Período
  const [selectedValue, setSelectedValue] = useState('');
  //SELECT CONDICOE DA ÁREA
  const [selectedValue2, setSelectedValue2] = useState('');

  //Array nome dos técnicos
  const tecnicos = [
    {
      id: '1',
      name: 'Gustavo',
    },
    {
      id: '2',
      name: 'Jorran',
    },
    {
      id: '3',
      name: 'Joel',
    },
    {
      id: '4',
      name: 'Jhonny',
    },
  ];

  //form Hooks
  const {control, handleSubmit, errors} = useForm();

  //mascara data
  function DateMascaraChange(e) {
    setData(mascaraData(e));
  }

  //setando os valores no arrray para poder mostrar os nomes dos técnicos
  function onSelectedItemsChange(value) {
    setNomeTecnico(value);
    console.log(value);
  }

  const onSubmit = (data) => {
    console.log(data);
    alert('TUDO OKAY');
  };
  return (
    <SafeAreaView style={styles.backgroud}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Image source={logoSea} />
        </View>
        <Text style={styles.TextInformativo}>Nome da Equipe</Text>
        <MultiSelect
          style={styles.MultiSelect}
          uniqueKey="id"
          onSelectedItemsChange={(itens) => onSelectedItemsChange(itens)}
          items={tecnicos}
          selectedItems={NomeTecnico}
          selectedItems={NomeTecnico}
          tagRemoveIconColor="#000"
          name="name"
          submitButtonColor="#13374a"
          removeSelected
        />
        <Text style={styles.TextInformativo}>Data</Text>
        <Controller
          control={control}
          render={({value, onChange}) => (
            <TextInput
              type="date"
              placeholder="Data"
              style={styles.inputText}
              value={data}
              onChangeText={DateMascaraChange}
            />
          )}
          name="data"
          rules={{required: true}}
          defaultValue=""
        />
        {errors.data && <Text>This is required.</Text>}
        <Text style={styles.TextInformativo}>Nome da Obra</Text>
        <Controller
          control={control}
          render={({value, onChange}) => (
            <TextInput
              placeholder="Nome da Obra"
              style={styles.inputText}
              value={value}
              onChangeText={(text) => onChange(text)}
            />
          )}
          name="nomeobra"
          rules={{required: true}}
          defaultValue=""
        />

        {errors.nomeobra && <Text>This is required.</Text>}

        <Text style={styles.TextInformativo}>Perído</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.SelectPicker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          mode="dropdown">
          <Picker.Item label="-" value="" />
          <Picker.Item label="MANHÃ" value="MANHÃ" />
          <Picker.Item label="TARDE" value="TARDE" />
          <Picker.Item label="NOITE" value="NOITE" />
        </Picker>

        <Text style={styles.TextInformativo}>Condições da Área</Text>
        <Picker
          selectedValue={selectedValue2}
          style={styles.SelectPicker}
          onValueChange={(v) => setSelectedValue2(v)}
          mode="dropdown">
          <Picker.Item label="-" value="" />
          <Picker.Item label="OPERÁVEL" value="OPERÁVEL" />
          <Picker.Item label="OPERÁVEL PARC." value="OPERÁVEL PARC." />
          <Picker.Item label="INOPERÁVEL" value="ONOPERÁVEL" />
        </Picker>

        <TouchableOpacity
          style={styles.buttonToucha}
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.TextButton}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: '#0000',
    justifyContent: 'center',
  },
  containerLogo: {
    backgroundColor: '#0000',
    height: 130,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCadastro: {
    fontSize: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  TextInformativo: {
    fontFamily: 'lucida grande',
    marginTop: 10,
    width: '85%',
    marginBottom: 20,
    fontSize: 15,
    color: '#000',
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
  SelectPicker: {
    padding: 10,
    width: '90%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    fontSize: 17,
  },
  MultiSelect: {
    marginVertical: 25,
    height: 20,
    alignContent: 'center',
  },
});
