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
//date
//import DateTimePicker from '@react-native-community/datetimepicker';
//select
import {Picker} from '@react-native-community/picker';
//MultiSelect
import MultiSelect from 'react-native-multiple-select';
//import * as Yup from 'yup';
import api from '../../services/api';
import {useForm, Controller} from 'react-hook-form';

export default function Register({navigation: {navigate}}) {
  //pegando valor do Select
  const [selectedValue, setSelectedValue] = useState('');
  //SELECT CONDICOE DA ÁREA
  const [selectedValue2, setSelectedValue2] = useState('');

  const [multiSelect, setmultSelect] = useState('');
  const [NomeTecnico, setNomeTecnico] = useState([]);

  const tecnicos = [
    {
      id: '92iijs7yta',
      name: 'Gustavo',
    },
    {
      id: 'a0s0a8ssbsd',
      name: 'Jorran',
    },
    {
      id: '16hbajsabsd',
      name: 'Joel',
    },
    {
      id: 'nahs75a5sg',
      name: 'Jhonny',
    },
  ];

  //form Hooks
  const {control, handleSubmit, errors} = useForm();

  function onSelectedItemsChange(NomeTecnico) {
    setNomeTecnico(NomeTecnico);
  }

  const onSubmit = (data) => {
    console.log(data);
    console.log(selectedValue);
  };
  return (
    <SafeAreaView style={styles.backgroud}>
      <Text style={styles.TextInformativo}>Nome da Equipe</Text>
      <MultiSelect
        style={styles.MultiSelect}
        uniqueKey="id"
        hideTags
        ref={(component) => {
          setmultSelect(component);
        }}
        onChangeInput={(text) => console.warn(text)}
        onSelectedItemsChange={onSelectedItemsChange}
        items={tecnicos}
        selectedItems={NomeTecnico}
        searchInputPlaceholderText="Procurar Nome..."
        submitButtonColor="#13374a"
        removeSelected
      />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    backgroundColor: '#0000',
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
    borderRadius: 15,
    fontSize: 17,
  },
  MultiSelect: {
    marginVertical: 25,
    height: 20,
    alignContent: 'center',
  },
});
