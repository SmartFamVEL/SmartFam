import { Text, View, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../index";
import { useNavigation } from "expo-router";

// Images
import anl from "../../assets/images/analysis.png";
import exp from "../../assets/images/exp.png";

const Main = () =>{

  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
        flexDirection: "row",
        gap: 90,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Analysis")}>
          <Image source={anl} style={{ width: 90, height: 90 }} />
        </TouchableOpacity >
        <Text>Analysis Report</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate("ExpList")}>
          <Image source={exp} style={{ width: 90, height: 90 }} />
        </TouchableOpacity>
        <Text>Your Spendings</Text>
      </View>
    </View>
  );
};

export default Main;
