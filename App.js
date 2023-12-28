import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

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
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableWithoutFeedback,
//   Keyboard,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";

// export default function App() {
//   const [text, setText] = useState("");
//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//         >
//           <TextInput
//             placeholder="Type text"
//             value={text}
//             onChangeText={setText}
//           />
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingBottom: 30,
//   },
// });
