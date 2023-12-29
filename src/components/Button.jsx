import { Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "../constans/Colors";

const Button = ({ title, onPress = () => {}, isDisabled }) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { backgroundColor: isDisabled ? COLORS.disable : COLORS.orange },
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.titleBtn}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: "100%",
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },

  titleBtn: {
    color: COLORS.white,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});

export default Button;
