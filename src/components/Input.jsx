import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import COLORS from "../constans/Colors";

const Input = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWrapper: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderRadius: 8,
  },
});
