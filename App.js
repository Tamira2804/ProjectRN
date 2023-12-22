import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import COLORS from "./src/constans/Colors";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto-v30-cyrillic_latin-regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto-v30-cyrillic_latin-500.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto-v30-cyrillic_latin-700.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <Text>Open up App.js to start working on your app! OK</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
