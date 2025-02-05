import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import boyAvatar from "../../../SmartFam/assets/images/boyAvatar.png";
import edit from "../../assets/images/edit.png";
import smartphone from "../../assets/images/smartphone.png";
import mSalary from "../../assets/images/mSalary.png";
import gender from "../../assets/images/gender.png";
import age from "../../assets/images/age.png";
import BotLayout from "./BotLayout";

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.profileText}>Profile</Text>
        <View><Image source={boyAvatar} style={{ width: 130, height: 130, borderRadius: 100 }} /></View>
        <Text style={styles.helloUser}>Hello, Vijay!</Text>
        <Text style={styles.email}>vijay.s@gmail.com</Text>
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%", }}>
        <BotLayout />
      </View>

      <TouchableOpacity style={styles.edit}>
        <Image source={edit} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      <View style={styles.userDetailsContainer}>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={smartphone} style={{ width: 25, height: 25 }} />
            <Text style={{fontSize:20}}>Mobile No.</Text>
          </View>
          <Text style={{fontSize:20}}>9360477284</Text>
        </View>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={mSalary} style={{ width: 25, height: 25 }} />
            <Text style={{fontSize:20}}>Monthly Salary</Text>
          </View>
          <Text style={{fontSize:20}}>$ 5000</Text>
        </View>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={gender} style={{ width: 25, height: 25 }} />
            <Text style={{fontSize:20}}>Gender</Text>
          </View>
          <Text style={{fontSize:20}}>Male</Text>
        </View>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={age} style={{ width: 25, height: 25 }} />
            <Text style={{fontSize:20}}>Age</Text>
          </View>
          <Text style={{fontSize:20}}>21</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  topContainer: {
    width: "100%",
    height: "37%",
    backgroundColor: "#047628",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 15
  },
  profileText: {
    fontSize: 40,
    color: "white",

  },
  helloUser: {
    fontSize: 34,
    color: "white"
  },
  email: {
    color: "#BCCCDC",
    fontSize: 20,
  },
  edit: {
    height: "6%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userDetailsContainer:{
    height:"40%",
    width: "90%",
    marginLeft:"5%",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:2,
    borderColor: "lightGrey",
    borderRadius: 20,
    backgroundColor:"#F8FAFC"
  },
  userInnerContainer:{
    height:"23%",
    width:"90%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    borderRadius: 20,

  },
  userDetailsGroup:{
    width: "50%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    gap:10,
    flexDirection:"row",
  }

})

export default Profile;
