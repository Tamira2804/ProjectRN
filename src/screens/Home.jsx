import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
