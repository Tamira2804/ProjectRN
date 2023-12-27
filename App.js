import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import {
  Registration,
  Login,
  Map,
  Profile,
  CreatePosts,
  Comments,
  Home,
} from "./src/screens";

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
      <Registration />
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
