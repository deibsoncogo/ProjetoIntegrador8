import { StyleSheet } from 'react-native'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },

  text: {
    fontWeight: 'bold',
    marginBottom: 15,
  },

  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },

  button: {
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: color.whitePrimary,
    backgroundColor: color.blueSecondary,
  }
})
