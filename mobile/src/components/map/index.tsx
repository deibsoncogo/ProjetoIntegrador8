import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { mockIllnessesCases } from '../../database/mock';
import { IllnessCase } from '../illnessCase';
import { styles } from './styles';

export function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este é o mapeamento de casos registrado</Text>

      <ScrollView alwaysBounceHorizontal keyboardShouldPersistTaps='never' style={styles.containerIllnesses}>
        {mockIllnessesCases.map((illnessCase) => <IllnessCase key={illnessCase.id} data={illnessCase}/>)}
      </ScrollView>
    </View>
  )
}
