import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import { useNavigation } from "expo-router";
import { Picker } from "@react-native-picker/picker";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [monthlySalary, setMonthlySalary] = useState("");
    const [mobileNo, SetMobileNo] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");

    const navigation = useNavigation();

    const handleSignup = async () => {

        if (!username || !email || !password || !monthlySalary || !mobileNo || !gender) {
            setError("All fields are required");
            return;
        }

        try {
            setError("");

            const Data = {
                username,
                email,
                password,
                monthlysalary: Number(monthlySalary),
                ph: mobileNo,
                gender,
            }
            const response = await axios.post('http://172.16.147.47:6700/Adduser', Data);

            if (response.status === 200) {
                console.log("New User Registered Successfully", response.data);
                setUsername("");
                setEmail("");
                setPassword("");
                setMonthlySalary("");
                SetMobileNo("");
                setGender("");
                navigation.navigate("Login");
            }

        }
        catch (err) {
            console.error(err.response?.data?.message || "Error adding user");
        }
    }

    return (
        <View style={styles.signupContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.accountText1}>Create a</Text>
                <Text style={styles.accountText2}>New Account</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.formContainer} contentContainerStyle={{ flexGrow: 1 }}>
                    {error && (<View style={styles.error}>
                        <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>
                    </View>)}
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
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select Gender" value="" enabled={false} />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </View>

                    <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
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
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
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
    pickerContainer: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: "#f8f8f8",
        overflow: "hidden",
    },
    picker: {
        height: 50,
        width: "100%",
        color: "#333",
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
    error: {
        width: "100%",
        height: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Signup;