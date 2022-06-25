import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components/header'
import { Illness } from '../../components/illness'
import { Map } from '../../components/map'
import { Patient } from '../../components/patient'
import { UseAll } from '../../hooks/allContext'
import { styles } from './styles'

export function Home() {
  const { pageActive } = UseAll()

  return (
    <View style={styles.container}>
      <Header />

      { pageActive === 'home' && <Map /> }
      { pageActive === 'patient' && <Patient /> }
      { pageActive === 'illness' && <Illness /> }
    </View>
  )
}
