import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";

import COLORS from "../constans/Colors";
import RegistrationScreen from "../screens/Registration";
import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import MapScreen from "../screens/Map";
import CommentsScreen from "../screens/Comments";

const MainStack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{
            title: "Мапа",
            headerTitleAlign: "center",
            headerTitleStyle: {
              textAlign: "center",
              fontSize: 17,
              fontFamily: "Roboto-Medium",
              color: COLORS.secondaryText,
            },
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            title: "Коментарі",
            headerTitleAlign: "center",
            headerStyle: {
              borderBottomWidth: 1,
              borderBottomColor: COLORS.gray,
            },
            headerTitleStyle: {
              textAlign: "center",
              fontSize: 17,
              fontFamily: "Roboto-Medium",
              color: COLORS.secondaryText,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
