import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./components/Login/Login";
import GetStarted from "./components/Login/GetStarted";
import Land from "./components/Land";
import Profile from "./components/Profile";
import Analysis from "./components/Analysis";
import Signup from "./components/Signup";
import ExpAddForm from "./components/ExpAddForm";
import ExpList from "./components/ExpList";
import EditProfile from "./components/EditProfile";

export type RootStackParamList = {
  GetStarted: undefined;
  Login: undefined;
  Land: undefined;
  Analysis: undefined;
  Profile: undefined;
  Signup: undefined;
  ExpAddForm: undefined;
  ExpList: undefined;
  EditProfile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Index() {

  const [proptoken, setProptoken] = useState("");

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Login">
        {(props) => <Login {...props} setProptoken={setProptoken} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ExpAddForm" component={ExpAddForm} />
      <Stack.Screen name="ExpList" component={ExpList} />
      <Stack.Screen name="Land">
        {(props) => <Land {...props} proptoken={proptoken} />}
      </Stack.Screen>
      <Stack.Screen name="Analysis" component={Analysis} />
      <Stack.Screen name="Profile">
        {(props) => <Profile {...props} proptoken={proptoken} />}
      </Stack.Screen>
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
