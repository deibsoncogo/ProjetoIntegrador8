import React, { useState } from 'react'
import { Alert, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Illness() {
  const [name, setName] = useState('Usuário Teste')
  const [dateFirstSymptom, setDateFirstSymptom] = useState('')

  async function savePatient() {
    Keyboard.dismiss()

    if (dateFirstSymptom === '') {
      return Alert.alert('Falta de informação', 'Todos campos devem estar preenchidos')
    }

    setDateFirstSymptom('')

    return Alert.alert('Sucesso', `Doença registrada ao paciente`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Olá {name},
        informe a data do primeiro sintoma,
        depois basta clicar na doença para salvar.
      </Text>

      <TextInput placeholder='Data do primeiro sintoma' value={dateFirstSymptom} onChangeText={setDateFirstSymptom} keyboardType='phone-pad' style={styles.textInput}/>

      <ScrollView alwaysBounceHorizontal keyboardShouldPersistTaps='never'>
        <TouchableOpacity activeOpacity={0.7} onPress={savePatient}>
          <Text style={styles.button}>Dengue</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={savePatient}>
          <Text style={styles.button}>Zika</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} onPress={savePatient}>
          <Text style={styles.button}>Chikungunya</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
