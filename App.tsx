import { Home } from "./src/screens/home";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";


export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontLoaded) { return <AppLoading /> }

  return (
    <Home />
  );
}
