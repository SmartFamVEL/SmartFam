import { Text, View,ScrollView,Image} from "react-native";
import Amount from "../components/Amount";
import BotLayout from "../components/BotLayout";
import Main from "../components/Main";
import ExpAdd from "../components/ExpAdd";
import TypeWriter from 'react-native-typewriter';
import Mon from "../../assets/images/mon.png";
const Land=()=>{
    const User="Mugeish Kumar"
    return (
      <View
      style={{
        backgroundColor:'#FFF'
      }}
      >
         <View
        style={{
          paddingTop: 40,
          paddingLeft: 30,
          backgroundColor: "#047628",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 240,
          position: "relative", 
          overflow: "hidden", 
        }}
      >
        <Image
          source={Mon}
          style={{
            width: 140,
            height: 230,
            position: "absolute", 
            top:20,
            right: 10, 
            transform: [{ rotate: "15deg" }], 
          }}
        />
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
          Welcome,
        </Text>
        <Text style={{ fontSize: 22, color: "#FFF" }}><TypeWriter typing={1}>{User}</TypeWriter></Text>
        <View style={{marginLeft:-20}}>
          <ExpAdd/>
        </View>
        </View>
        <Amount/>
  
        <View
        style={{
          display:'flex',
          borderTopColor:'#000',
          position:'relative',
          top:270,
          marginLeft:20,
        }}>
        <BotLayout/>
        </View>
  
        <View
        style={{
          display:'flex',
          flexDirection:'column',
          backgroundColor:'#FFF',
          overflow:'hidden'
        }}
        >
          <Main/>
        </View>
      </View>
    );
}

export default Land;

