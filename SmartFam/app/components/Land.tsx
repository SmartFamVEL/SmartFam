import { Text, View, ScrollView, Image } from "react-native";
import Amount from "../components/Amount";
import BotLayout from "../components/BotLayout";
import Main from "../components/Main";
import ExpAdd from "../components/ExpAdd";
import TypeWriter from 'react-native-typewriter';
import Mon from "../../assets/images/mon.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Land = ({proptoken}) => {
  const [email,setEmail] = useState("");
  const [userdata,setUserdata] = useState([]);

  useEffect(() => {
    const decodeToken = JSON.parse(atob(proptoken.split('.')[1]));
    setEmail(decodeToken.email);
}, [proptoken])

useEffect(() => {
  const fetchData = async() =>{
    if (!email) return;

    try{
      const response = await axios.get(`http://172.16.147.47:6700/getdata/${email}`);
      setUserdata(response.data[0]);
    }
    catch(err){
      console.error(err.response?.data?.message || "Error fetching user");
  }
  }
  fetchData();
},[email]);
  
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
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFF" }}>
          Welcome,
        </Text>
        <Text style={{ fontSize: 35, color: "#FFF" }}>
          <TypeWriter typing={1}>{userdata.username}</TypeWriter>
        </Text>
        <View style={{ marginLeft: -10, marginTop: 10 }}>
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
