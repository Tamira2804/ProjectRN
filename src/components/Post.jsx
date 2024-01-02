import { StyleSheet, Text, View, Image } from "react-native";
import COLORS from "../constans/Colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Post = ({ id, uri, titlePost, place, location }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require("../../assets/images/image1.png")}
          styles={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.titlePost}>Ліс</Text>
      <View style={styles.info}>
        <View style={{ flexDirection: "row" }}>
          <Feather
            name="message-circle"
            style={{ marginRight: 6 }}
            size={24}
            color={COLORS.grey}
            onPress={() => {
              navigation.navigate("Comments");
            }}
          />
          <Text styles={styles.counter}>0</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Feather
            name="map-pin"
            style={{ marginRight: 6 }}
            size={24}
            color={COLORS.grey}
            onPress={() => {
              navigation.navigate("Map");
            }}
          />
          <Text styles={styles.place}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    marginBottom: 34,
  },
  imageBox: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 8,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  titlePost: {
    color: COLORS.secondaryText,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8,
  },
  info: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  counter: {
    color: COLORS.grey,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  place: {
    color: COLORS.primaryText,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
