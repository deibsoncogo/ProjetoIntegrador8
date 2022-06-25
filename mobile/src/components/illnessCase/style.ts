import { StyleSheet } from 'react-native'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: color.blueSecondary,
    borderRadius: 10,
    padding: 8,
  },

  textName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  textDescription: {
    fontWeight: '400',
  },
})
