import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components/header'
import { Patient } from '../../components/patient'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Patient />
    </View>
  )
}
