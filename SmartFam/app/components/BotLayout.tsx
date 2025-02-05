import React from "react";
import { View, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";

// Import images
import home from "../../assets/images/home.png";
import Mic from "../../assets/images/Mic.png";
import set from "../../assets/images/set.png";

const BotLayout = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={home} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Mic} style={styles.micIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={set} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom:0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft:-20,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
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
