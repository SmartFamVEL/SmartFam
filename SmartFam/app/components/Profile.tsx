import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import boyAvatar from "../../../SmartFam/assets/images/boyAvatar.png";
import girlAvatar from "../../../SmartFam/assets/images/girlAvatar.png";
import edit from "../../assets/images/edit.png";
import smartphone from "../../assets/images/smartphone.png";
import mSalary from "../../assets/images/mSalary.png";
import gender from "../../assets/images/gender.png";
import age from "../../assets/images/age.png";
import BotLayout from "./BotLayout";
import axios from "axios";
import { useNavigation } from "expo-router";

const Profile = ({proptoken}) => {
  const [email,setEmail] = useState("");
  const [userdata,setUserdata] = useState([]);
  const [avatar,setAvatar] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    const decodeToken = JSON.parse(atob(proptoken.split('.')[1]));
    setEmail(decodeToken.email);
}, [proptoken])

useEffect(() => {
  const fetchData = async() =>{
    if (!email) return;

    try{
      const response = await axios.get(`http://172.16.147.47:6700/getdata/${email}`);
      setUserdata(response.data[0]);
    }
    catch(err){
      console.error(err.response?.data?.message || "Error fetching user");
  }
  }
  fetchData();
},[email]);

useEffect(()=>{
  if(userdata.gender){
    setAvatar(userdata.gender.toLowerCase() === "male" ? boyAvatar : girlAvatar);
  }
},[userdata.gender]);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.profileText}>Profile</Text>
        <View><Image source={avatar} style={{ width: 130, height: 130, borderRadius: 100 }} /></View>
        <Text style={styles.helloUser}>Hello, {userdata.username}!</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={{ position: "absolute", bottom: 0, width: "100%", }}>
        <BotLayout />
      </View>

      <TouchableOpacity style={styles.edit} onPress={()=>navigation.navigate("EditProfile")}>
        <Image source={edit} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      <View style={styles.userDetailsContainer}>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={smartphone} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 20 }}>Mobile No.</Text>
          </View>
          <Text style={{ fontSize: 20 }}>{userdata.ph}</Text>
        </View>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={mSalary} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 20 }}>Monthly Salary</Text>
          </View>
          <Text style={{ fontSize: 20 }}>$ {userdata.monthlysalary}</Text>
        </View>
        <View style={styles.userInnerContainer}>
          <View style={styles.userDetailsGroup}>
            <Image source={gender} style={{ width: 25, height: 25 }} />
            <Text style={{ fontSize: 20 }}>Gender</Text>
          </View>
          <Text style={{ fontSize: 20 }}>{userdata.gender}</Text>
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
  userDetailsContainer: {
    height: "35%",
    width: "96%",
    marginLeft: "2%",
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    marginTop:30
  },
  userInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 380,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
  },
  userDetailsGroup: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    flexDirection: "row",
  }

})

export default Profile;