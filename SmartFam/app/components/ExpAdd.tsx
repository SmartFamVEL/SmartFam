import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "expo-router";

const ExpAdd = () => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        display: "flex",
        paddingTop: 20,
        elevation: 10,
        shadowColor: "#000",
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#b3dd04",
          borderRadius: 20,
          width: 175,
          height: 60,
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "center", 
          elevation: 5,
        }}
        onPress={()=>navigation.navigate("ExpAddForm")}
      >
        <Text style={{ fontSize: 38, color: "#FFF", marginRight: 8 }}>+</Text>
        <Text
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Add Expenses
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpAdd;
