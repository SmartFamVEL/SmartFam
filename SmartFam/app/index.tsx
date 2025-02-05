import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login/Login";
import GetStarted from "./components/Login/GetStarted";
import Land from "./components/Land";

export type RootStackParamList = {
  GetStarted: undefined;
  Login: undefined;
  Land: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Land" component={Land} />
    </Stack.Navigator>
  );
}
