import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import COLORS from "../constans/Colors";
import ImageBG from "../../assets/images/PhotoBG.png";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSignIn = () => {
  //   Alert.alert("Credentials", `${login}`, `${email}`, `${password}`);
  // };

  return (
    <ImageBackground source={ImageBG} style={styles.image} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.avatarBox}>
          <TouchableOpacity
            style={styles.addImgButton}
            onPress={() => Alert.alert("Plus Pressed")}
          >
            <AntDesign name="pluscircleo" size={24} color={COLORS.orange} />
          </TouchableOpacity>
        </View>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.title}>Реєстрація</Text>

            <KeyboardAvoidingView
              style={styles.blockWrapper}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                placeholder="Логін"
                onChangeText={setLogin}
              />
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                onChangeText={setEmail}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.showPassword}>
                  <Text>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity
              style={styles.btn}
              onPress={console.log(
                "Credentials",
                `${login}`,
                `${email}`,
                `${password}`
              )}
            >
              <Text style={styles.titleBtn}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    position: "relative",
    backgroundColor: COLORS.primaryBg,

    height: 550,
    marginTop: 300,
    paddingHorizontal: 16,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  avatarBox: {
    position: "absolute",
    left: "50%",

    width: 120,
    height: 120,

    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: COLORS.inputBg,
    borderRadius: 16,
  },

  addImgButton: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: -12,
  },

  blockWrapper: {
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 16,
    alignSelf: "center",
  },

  input: {
    width: 343,
    height: 50,
    padding: 16,
    backgroundColor: COLORS.inputBg,
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
  },

  showPassword: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },

  btn: {
    width: 343,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: COLORS.orange,
    borderRadius: 25,
    marginTop: 28,
  },
  titleBtn: {
    color: COLORS.white,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  link: {
    color: COLORS.linkedText,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    alignSelf: "center",
  },
});
