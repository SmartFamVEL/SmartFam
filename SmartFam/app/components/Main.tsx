import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../index";

// Images
import anl from "../../assets/images/anl.png";
import exp from "../../assets/images/exp.png";

const Main: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 90,
      }}
    >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Analysis")}>
          <Image source={anl} style={{ width: 80, height: 80 }} />
        </TouchableOpacity>
        <Text>Analysis Report</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={exp} style={{ width: 80, height: 80 }} />
        </TouchableOpacity>
        <Text>Your Spendings</Text>
      </View>
    </View>
  );
};

export default Main;
