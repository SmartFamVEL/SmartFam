import { Text, View, ScrollView, Image } from "react-native";
import Amount from "../components/Amount";
import BotLayout from "../components/BotLayout";
import Main from "../components/Main";
import ExpAdd from "../components/ExpAdd";
import TypeWriter from 'react-native-typewriter';
import Mon from "../../assets/images/mon.png";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

const Land = ({proptoken}) => {
  const [email,setEmail] = useState("");
  const User = "Mugeish Kumar";

  useEffect(() => {
    const decodeToken = JSON.parse(atob(proptoken.split('.')[1]));
    console.log("D:",decodeToken);
    setEmail(decodeToken.email);
}, [proptoken])
  
  return (
    <View style={{ backgroundColor: '#FFF' }}>
      <View
        style={{
          paddingTop: 40,
          paddingLeft: 30,
          backgroundColor: "#047628",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 280,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          source={Mon}
          style={{
            width: 140,
            height: 270,
            position: "absolute",
            top: 20,
            right: 10,
            transform: [{ rotate: "15deg" }],
          }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
          Welcome,
        </Text>
        <Text style={{ fontSize: 22, color: "#FFF" }}>
          <TypeWriter typing={1}>{email}</TypeWriter>
        </Text>
        <View style={{ marginLeft: -20 }}>
          <ExpAdd />
        </View>
      </View>

      <Amount />

      <View
        style={{
          display: 'flex',
          borderTopColor: '#000',
          position: 'relative',
          top: 270,
          marginLeft: 20,
        }}
      >
        <BotLayout />
      </View>

      <View
        style={{
          height: "40%",
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#FFF',
          overflow: 'hidden'
        }}
      >
        <Main />
      </View>
    </View>
  );
}

export default Land;
