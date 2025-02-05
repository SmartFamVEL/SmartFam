import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../Index";
import go from "../../../assets/images/go.png";
import boy from "../../../assets/images/mon.png";

type GetStartedProps = {
  navigation: StackNavigationProp<RootStackParamList, "GetStarted">;
};

const GetStarted: React.FC<GetStartedProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Welcome to SmartFam!</Text>
        <View style={{ padding: 100 }}>
          <Image source={boy} style={{ width: 280, height: 280 }} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomDescription}>
          Hey, Welcome to SmartFam! Make your family budget smartly with us.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.getStartedText}>
            Get Started <Image source={go} style={styles.imageButton} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Style remains unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    gap: 2,
    flexDirection: "column",
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  topText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  bottomContainer: {
    backgroundColor: "#047628",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 310,
    padding: 20,
    alignItems: "center",
    paddingBottom: 40,
  },
  bottomDescription: {
    color: "#FFF",
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 200,
    height: 70,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  getStartedText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginRight: 10,
  },
  imageButton: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default GetStarted;
