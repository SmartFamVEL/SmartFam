import { Text, View, ScrollView, TouchableOpacity,Image} from "react-native";

//images

import anl from "../../assets/images/anl.png"
import exp from "../../assets/images/exp.png"
const Main = () => {
  return (
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      gap:90
    }}>
      <View>
      <TouchableOpacity><Image source={anl} style={{width:80,height:80}}/></TouchableOpacity>
      <Text>Analysis Report</Text>
      </View>
      <View>
      <TouchableOpacity><Image source={exp} style={{width:80,height:80}}/></TouchableOpacity>
      <Text>Your Spendings</Text>
      </View>
    </View>
  );
};

export default Main;
