import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {Calendar} from "react-native-calendars";
import sampleGraph from "../../assets/images/sampleGraph.png";
import BotLayout from "./BotLayout";

const Analysis = () => {
    return(
        <View style={styles.analysisContainer}>
            <View style={styles.heading}>
                <Text style={{fontSize:37,color:"white"}}>Analysis Report</Text>
            </View>
            <View style={styles.calendarContainer}>
                <Calendar/>
            </View>
            <View style={styles.reportContainer}>
                <Image source={sampleGraph} style={styles.reportImg}/>
            </View>
            <View style={{position: "absolute", bottom: 0, width: "100%"}}>
                <BotLayout/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    analysisContainer:{
        flex:1
    },
    heading:{
        height:"10%",
        width:"100%",
        backgroundColor:"#047628",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        gap:15
    },
    calendarContainer: {
        margin: 20,
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#ffffff",
        elevation: 5, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      reportContainer:{
        height:"30%",
        width:"96%",
        borderRadius:10,
        marginLeft:"2%",
        elevation: 10,
        shadowColor: "rgba(0, 0, 0, 0.23)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.23,
        shadowRadius: 10,
      },
      reportImg:{
        height:"100%",
        width:"100%",
        overflow:"hidden",
        objectFit:"fill",
        borderRadius:10,
        elevation: 10,
        shadowColor: "rgba(0, 0, 0, 0.23)", 
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.23,
        shadowRadius: 10,
      }
})

export default Analysis;