import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import go from "../../../assets/images/go.png";
import boy from "../../../assets/images/mon.png"
const GetStarted = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Welcome to SmartFam!</Text>
        <View style={{padding:100}}><Image source={boy} style={{width:280,height:280}}/></View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomDescription}>
          Hey, Welcome to SmartFam! Make your family budget smartly with us.
        </Text>
        <TouchableOpacity style={styles.getStartedButton} onPress={() => console.log("Get Started Pressed")}>
          <Text style={styles.getStartedText}>
            Get Started <Image source={go} style={styles.imageButton} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    gap:2,
    flexDirection: 'column', 
  },
  topContainer: {
    flex: 1, // Takes up available space, but will be pushed down by space-between
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  topText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  bottomContainer: {
    backgroundColor: '#047628',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height:310,
    padding: 20,
    alignItems: 'center', // Center horizontally
    paddingBottom: 40, // Add some padding at the bottom for the button
  },
  bottomDescription: {
    color: "#FFF",
    textAlign: 'center',
    paddingBottom:20,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20, // Add some space below the description
  },
  getStartedButton: {
    backgroundColor: 'white', // White background for the button
    borderRadius: 25, // Rounded corners for the button
    width:200,
    height:70,
    paddingVertical: 12, // Vertical padding for the button text
    paddingHorizontal: 24, // Horizontal padding for the button text
    alignItems: 'center', // Center text and image inside the button
    flexDirection: 'row', // Align text and image horizontally
    justifyContent: 'center',
  },
  getStartedText: {
    color: 'black', // Black text color
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10, // Space between text and image
  },
  imageButton: {
    width: 20, // Smaller image size
    height: 20,
    resizeMode: 'contain', // Or 'cover' if you want it to fill the circle
  },
});

export default GetStarted;