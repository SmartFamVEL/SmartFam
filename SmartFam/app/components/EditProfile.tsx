import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BotLayout from "./BotLayout";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "expo-router";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [monthlySalary, setMonthlySalary] = useState("");
    const [mobileNo, SetMobileNo] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = await SecureStore.getItem("user_token");
                if (!token) {
                    console.log("No token found");
                    return;
                }
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                const userEmail = decodedToken.email;
                setEmail(userEmail);

                const response = await axios.get(`http://172.16.147.47:6700/getdata/${userEmail}`);
                if (response.status === 200) {
                    const userData = response.data[0];
                    setUsername(userData.username);
                    setMonthlySalary(userData.monthlysalary.toString());
                    SetMobileNo(userData.ph);
                    setGender(userData.gender);

                }
            } catch (err) {
                console.error(err.response?.data?.message || "Error fetching user");
            }
        }
        fetchUserData();
    }, []);

    const updateUserProfile = async () => {
        if (!username || !monthlySalary || !gender || !mobileNo) {
            setError("All fields are required");
            return;
        }

        try {
            setError("");
            const response = await axios.put(`http://172.16.147.47:6700/updateUser/${email}`, {
                username: username,
                monthlysalary: monthlySalary,
                ph: mobileNo,
                gender: gender,
            });
            if (response.status === 200) {
                setError("");
                alert("profile Updated Successfully");
                navigation.navigate("Profile");
            }

        }
        catch (err) {
            setError(err.response?.data?.message || "Error updating profile");
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.topContainer}>
                <Text style={{ fontSize: 32, color: "white" }}>Edit User Profile</Text>
            </View>

            <ScrollView style={styles.formContainer} contentContainerStyle={{ flexGrow: 1 }}>
                {error && (
                    <View style={styles.error}>
                        <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>
                    </View>
                )}
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    value={username}
                    onChangeText={setUsername}
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

                <Text style={styles.label}>Mobile No:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="Enter your Mobile No."
                    value={mobileNo}
                    onChangeText={SetMobileNo}
                    placeholderTextColor="#888"
                />

                <TouchableOpacity style={styles.editBtn} onPress={updateUserProfile}>
                    <Text style={styles.editBtnText}>Update Profile</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <BotLayout />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        height: "10%",
        width: "100%",
        backgroundColor: "#047628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    formContainer: {
        padding: 20,
        marginTop: "16%"
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
    },
    input: {
        height: 55,
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
        overflow: "hidden",
        backgroundColor: "#f8f8f8",
    },
    picker: {
        height: 55,
        width: "100%",
        color: "#333",
    },
    editBtn: {
        backgroundColor: "#047628",
        padding: 15,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20,
    },
    editBtnText: {
        color: "white",
        fontSize: 18,
    },
    error: {
        marginBottom: 20,
    },
});

export default EditProfile;
