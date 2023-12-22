import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";

import COLORS from "../constans/Colors";
import ImageBG from "../../assets/images/PhotoBG.png";

export const RegistrationScreen = () => {
  return (
    <ImageBackground source={ImageBG} style={styles.image} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.imageBox}></View>
        <View style={styles.blockWrapper}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <TextInput style={styles.input} placeholder="Пароль" />
          <Button style={styles.btn} title="Зареєстуватися" color />
          <Text style={styles.link}>Вже є акаунт? Увійти</Text>
        </View>
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
  imageBox: {
    width: 120,
    height: 120,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: COLORS.inputBg,
    borderRadius: 16,
  },

  blockWrapper: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    marginBottom: 33,
  },

  input: {
    width: 343,
    height: 50,
    padding: 16,
    backgroundColor: COLORS.inputBg,
    borderColor: COLORS.inputBorder,
    borderWidth: 1,
    borderRadius: 4,
  },
  btn: {
    width: 343,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: COLORS.orange,
    color: COLORS.white,
    borderRadius: 100,
  },
  link: {
    color: COLORS.linkedText,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
