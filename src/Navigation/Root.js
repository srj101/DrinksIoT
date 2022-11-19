import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Home";
import Settings from "../Settings";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

const Root = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={user ? `Home` : `Settings`}
    >
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default Root;
