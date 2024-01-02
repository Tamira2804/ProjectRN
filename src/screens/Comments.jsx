import { StyleSheet, View, Image } from "react-native";
import COLORS from "../constans/Colors";
import Input from "../components/Input";

const CommentsScreen = () => {
  return (
    <View styles={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require("../../assets/images/image1.png")}
          styles={styles.image}
          resizeMode="cover"
        />
      </View>
      <Input placeholder="Comment" />
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  imageBox: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  comment: {},
});
