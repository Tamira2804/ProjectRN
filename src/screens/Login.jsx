import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constans/Colors";
import ImageBG from "../../assets/images/PhotoBG.png";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleOnChange = (text, inputName) => {
    setInputs((prevState) => ({ ...prevState, [inputName]: text }));
  };

  const onLogin = () => {
    Keyboard.dismiss();
    setInputs({ email: "", password: "" });
    navigation.navigate("Home");
  };

  return (
    <ImageBackground source={ImageBG} style={styles.image} resizeMode="cover">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.title}>Увійти</Text>

            <KeyboardAvoidingView
              style={styles.blockWrapper}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                placeholder="Адреса електронної пошти"
                value={inputs.email}
                onChangeText={(text) => {
                  handleOnChange(text, "email");
                }}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  value={inputs.password}
                  onChangeText={(text) => {
                    handleOnChange(text, "password");
                  }}
                />

                <TouchableOpacity style={styles.showPassword}>
                  <Text>Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={styles.btn} onPress={onLogin}>
              <Text style={styles.titleBtn}>Увійти</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.link}>Немає акаунту?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Registration");
                }}
              >
                <Text style={styles.link}>Зареєструватися</Text>
              </TouchableOpacity>
            </View>
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

    height: 489,
    marginTop: 300,
    paddingHorizontal: 16,
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
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

export default LoginScreen;
