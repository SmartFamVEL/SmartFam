import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login/Login";
import GetStarted from "./components/Login/GetStarted";
import Land from "./components/Land";
import Profile from "./components/Profile";
import Analysis from "./components/Analysis";
import Signup from "./components/Signup";

export type RootStackParamList = {
  GetStarted: undefined;
  Login: undefined;
  Land: undefined;
  Analysis: undefined;
  Profile: undefined;
  Signup: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {

  const [proptoken, setProptoken] = useState("");
  console.log("propToken form index.js", proptoken);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login">
        {(props) => <Login {...props} setProptoken={setProptoken} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Land">
        {(props) => <Land {...props} proptoken={proptoken} />}
      </Stack.Screen>
      <Stack.Screen name="Analysis" component={Analysis} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
