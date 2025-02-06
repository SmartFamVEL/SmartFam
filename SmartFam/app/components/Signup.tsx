import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [monthlySalary, setMonthlySalary] = useState(null);
    const [mobileNo, SetMobileNo] = useState(null);
    const [gender, setGender] = useState("");

    return (
        <View style={styles.signupContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.accountText1}>Create a</Text>
                <Text style={styles.accountText2}>New Account</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.formContainer} contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        placeholder="Enter your Email"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Monthly Salary:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter your Salary"
                        value={monthlySalary}
                        onChangeText={setMonthlySalary}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Mobile No:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter your Mobile No."
                        value={mobileNo}
                        onChangeText={SetMobileNo}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Gender:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your Gender"
                        value={gender}
                        onChangeText={setGender}
                        placeholderTextColor="#888"
                    />

                    <TouchableOpacity style={styles.signupBtn}>
                        <Text style={styles.signupBtnText}>Signup</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
    },
    topContainer: {
        height: "15%",
        width: "100%",
        backgroundColor: "#047628",
        display: "flex",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    accountText1: {
        color: "white",
        fontSize: 25,
        marginTop: 20
    },
    accountText2: {
        color: "white",
        fontSize: 35,
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: 23,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333",
        fontWeight: "500",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: "#f8f8f8",
    },
    signupBtn: {
        backgroundColor: "#047628",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 15
    },
    signupBtnText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
})

export default Signup;