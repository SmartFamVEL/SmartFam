// import { Text, View,ScrollView,Image} from "react-native";
// import Amount from "./components/Amount.tsx";
// import BotLayout from "./components/BotLayout.tsx";
// import Main from "./components/Main.tsx";
// import ExpAdd from "./components/ExpAdd.tsx";
// import TypeWriter from 'react-native-typewriter';
// // image

// import Mon from "../assets/images/mon.png";
// // import Login from "./components/Login/Login.tsx";
// // import GetStarted from "./components/Login/GetStarted.tsx";
// export default function Index() {
//   const User="Mugeish Kumar"
//   return (
//     <ScrollView
//     style={{
//       backgroundColor:'#FFF'
//     }}
//     >
//        <View
//       style={{
//         paddingTop: 40,
//         paddingLeft: 30,
//         backgroundColor: "#047628",
//         borderBottomLeftRadius: 20,
//         borderBottomRightRadius: 20,
//         height: 240,
//         position: "relative", 
//         overflow: "hidden", 
//       }}
//     >
//       <Image
//         source={Mon}
//         style={{
//           width: 140,
//           height: 230,
//           position: "absolute", 
//           top:20,
//           right: 10, 
//           transform: [{ rotate: "15deg" }], 
//         }}
//       />
//       <Text style={{ fontSize: 25, fontWeight: "bold", color: "#FFF" }}>
//         Welcome,
//       </Text>
//       <Text style={{ fontSize: 22, color: "#FFF" }}><TypeWriter typing={1}>{User}</TypeWriter></Text>
//       <View style={{marginLeft:-20}}>
//         <ExpAdd/>
//       </View>
//       </View>
//       <Amount/>

//       <View
//       style={{
//         display:'flex',
//         borderTopColor:'#000',
//         position:'relative',
//         top:270,
//         marginLeft:20,
//       }}>
//       <BotLayout/>
//       </View>

//       <ScrollView 
//       style={{
//         display:'flex',
//         flexDirection:'column',
//         overflow:'hidden'
//       }}
//       >
//         <Main/>
//       </ScrollView>
//       {/* <Login/> */}
//       {/* <GetStarted/> */}
//     </ScrollView>
//   );
// }

import { Text, View,ScrollView,Image} from "react-native";
// import Analysis from "./components/Analysis";
import Profile from "../../SmartFam/app/components/Profile";

  export default function Index() {
    return (
      <Profile/>
      // <Analysis/>
    )
  }