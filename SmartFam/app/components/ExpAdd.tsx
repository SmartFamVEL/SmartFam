import { TouchableOpacity, Text, View } from "react-native";

const ExpAdd = () => {
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
          backgroundColor: "#0082ff",
          borderRadius: 25,
          width: 180,
          height: 60,
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "center", 
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 28, color: "#FFF", marginRight: 10 }}>+</Text>
        <Text
          style={{
            color: "#FFF",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Add Expenses
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpAdd;
