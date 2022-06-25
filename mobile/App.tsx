import { Home } from './src/screens/home'
import { StatusBar } from 'expo-status-bar'
import { AllProvider } from './src/hooks/allContext'

export default function App() {
  return (
    <AllProvider>
      <StatusBar style='dark' backgroundColor='transparent' translucent/>
      <Home />
    </AllProvider>
  )
}
