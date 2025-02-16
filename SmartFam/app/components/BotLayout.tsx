import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../index";
// Import images
import home from "../../assets/images/home.png";
import Mic from "../../assets/images/Mic.png";
import set from "../../assets/images/set.png";
const BotLayout:React.FC= () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList,'Profile'>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.navigate('Land')}>
        <Image source={home} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Mic} style={styles.micIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image source={set} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom:0,
    zIndex:3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft:-16,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20, 
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 20,
    shadowRadius: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: "black",
  },
  micIcon: {
    width: 50,
    height: 50,
  },
});

export default BotLayout;
