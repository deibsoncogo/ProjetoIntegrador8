import { StyleSheet } from 'react-native'
import { color } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },

  text: {
    marginBottom: 10,
    fontWeight: 'bold',
  },

  form: {
    width: "100%",
    marginBottom: 10,
  },

  textInput: {
    height: 50,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
  },

  containerButton: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: "100%",
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 250,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: color.whitePrimary,
    backgroundColor: color.blue,
  }
})
