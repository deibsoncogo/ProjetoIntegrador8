import React, { useState } from 'react'
import { Alert, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { mockPatients } from '../../database/mock'

export function Patient() {
  const [name, setName] = useState(mockPatients[0].name)
  const [birthDate, setBirthDate] = useState(mockPatients[0].birthDate)
  const [cpf, setCpf] = useState(mockPatients[0].cpf)
  const [rg, setRg] = useState(mockPatients[0].rg)
  const [telephone, setTelephone] = useState(mockPatients[0].telephone)
  const [district, setDistrict] = useState(mockPatients[0].district)
  const [city, setCity] = useState(mockPatients[0].city)

  async function savePatient() {
    Keyboard.dismiss()

    if (
      name === '' || birthDate === '' || cpf === '' || rg === '' ||
      telephone === '' || district === '' || city === ''
    ) {
      return Alert.alert('Falta de informação', 'Todos campos devem estar preenchidos')
    }

    return Alert.alert('Sucesso', 'Paciente cadastrado com sucesso')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crie ou altere os dados de um paciente aqui</Text>

      <ScrollView alwaysBounceHorizontal keyboardShouldPersistTaps='never'>

        <View style={styles.form}>
          <TextInput placeholder='Nome completo' value={name} onChangeText={setName} autoCapitalize='words' style={styles.textInput}/>
          <TextInput placeholder='Data de nascimento' value={birthDate} onChangeText={setBirthDate} keyboardType='numbers-and-punctuation' style={styles.textInput}/>
          <TextInput placeholder='CPF' value={cpf} onChangeText={setCpf} keyboardType='numeric' style={styles.textInput}/>
          <TextInput placeholder='RG' value={rg} onChangeText={setRg} keyboardType='numeric' style={styles.textInput}/>
          <TextInput placeholder='Telefone' value={telephone} onChangeText={setTelephone} keyboardType='phone-pad' style={styles.textInput}/>
          <TextInput placeholder='Bairro' value={district} onChangeText={setDistrict} style={styles.textInput}/>
          <TextInput placeholder='Cidade' value={city} onChangeText={setCity} style={styles.textInput}/>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity activeOpacity={0.7} onPress={savePatient}>
            <Text style={styles.button}>SALVAR INFORMAÇÕES</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
