import { Text, View, ScrollView } from "react-native";

const Main = () => {
  const Exp = [
    { Rent: "1000" },
    { Groceries: "300" },
    { Utilities: "150" },
    { Internet: "50" },
    { Transport: "100" },
    { Entertainment: "200" },
    { Insurance: "75" },
    { Savings: "500" },
  ];

  return (
    <View style={{ height: 200,backgroundColor:'#FFF'}}> 
      <ScrollView>
        {Exp.map((exp, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 10,
              marginBottom: 10,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 4 },
              elevation: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {Object.keys(exp)[0]}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold",color:'#e15454'}}>
              {"$" + Object.values(exp)[0]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Main;
