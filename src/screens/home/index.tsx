import React from 'react'
import { View, Text } from 'react-native'
import { styles } from "./styles";
import { Header } from "../../components/header";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <Text>Olá Projeto Integrador 8</Text>
    </View>
  )
}
