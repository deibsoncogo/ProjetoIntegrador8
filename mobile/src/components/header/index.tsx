import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Logomarca from '../../assets/logomarca.svg'
import { UseAll } from '../../hooks/allContext'
import { styles } from './styles'

export function Header() {
  const { ChangePageActive } = UseAll()

  return (
    <View style={styles.container}>
      <Logomarca width={150} height={150}/>


      <View style={styles.menu}>
        <TouchableOpacity onPress={() => { ChangePageActive('home') }}>
          <Text style={styles.logoutText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { ChangePageActive('patient') }}>
          <Text style={styles.logoutText}>Paciente</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { ChangePageActive('illness') }}>
          <Text style={styles.logoutText}>Doença</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
