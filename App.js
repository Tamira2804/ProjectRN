import "react-native-gesture-handler";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto-v30-cyrillic_latin-regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto-v30-cyrillic_latin-500.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto-v30-cyrillic_latin-700.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigation />;
}
