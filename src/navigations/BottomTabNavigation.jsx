import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Posts from "../screens/Posts";
import CreatePosts from "../screens/CreatePosts";
import Profile from "../screens/Profile";
import COLORS from "../constans/Colors";

const Tabs = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      backBehavior="history"
      detachInactiveScreenshots="false"
      screenOptions={{
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray,
        },
        headerTitleAlign: "center",
        headerTintColor: COLORS.primaryText,
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Публікації",
          headerRightContainerStyle: { paddingRight: 16 },
          headerRight: () => (
            <Feather name="log-out" size={24} color={COLORS.gray} />
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                {
                  backgroundColor: focused && COLORS.orange,
                },
              ]}
            >
              <Feather
                name="grid"
                color={focused ? COLORS.white : COLORS.orange}
                size={size}
              />
            </View>
          ),
          tabBarIconStyle: { marginLeft: 80 },
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePosts}
        options={{
          title: "Створити публікацію",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerLeft: () => (
            <Feather name="arrow-left" size={24} color={COLORS.gray} />
          ),
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                {
                  backgroundColor: focused && COLORS.orange,
                },
              ]}
            >
              <Feather
                name="plus"
                color={focused ? COLORS.white : COLORS.orange}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View
              style={[
                styles.iconWrapper,
                { backgroundColor: focused && COLORS.orange },
              ]}
            >
              <Feather
                name="user"
                color={focused ? COLORS.white : COLORS.orange}
                size={size}
              />
            </View>
          ),
          tabBarIconStyle: { marginRight: 80 },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrapper: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigation;
