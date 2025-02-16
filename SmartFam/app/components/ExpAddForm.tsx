import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import BotLayout from "./BotLayout";
import { useNavigation } from "expo-router";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Picker } from '@react-native-picker/picker';

const ExpAddForm = () => {

    const [title, setTitle] = useState("");
    const [mode, setMode] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const navigation = useNavigation();

    const handleAddExpense = async () => {

        if (!title || !mode || !type || !amount) {
            setError("All fields are required");
            return;
        }

        try {
            setError("");

            const token = await SecureStore.getItemAsync("user_token");
            if (!token) {
                setError("Authentication error. Please log in again.");
                return;
            }

            const Data = {
                Title: title,
                Mode: mode,
                Type: type,
                Amount: Number(amount)
            }
            console.log("Sending data:", Data);
            const response = await axios.post('http://172.16.146.231:6700/addExp', Data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setTitle("");
                setMode("");
                setType("");
                setAmount("");
                console.log("Expense added successfully");
                navigation.navigate("ExpList");
            }
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "Error adding expense";
            setError(errorMessage);
            console.error(errorMessage);
        }
    }


    return (
        <View style={styles.signupContainer}>
            <View style={styles.topContainer}>
                <Text style={styles.accountText}>Add New Expenses</Text>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.formContainer} contentContainerStyle={{ flexGrow: 1 }}>
                    {error && (<View style={styles.error}>
                        <Text style={{ color: "red", fontSize: 20 }}>{error}</Text>
                    </View>)}
                    <Text style={styles.label}>Title:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Title"
                        value={title}
                        onChangeText={setTitle}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Mode:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Mode"
                        value={mode}
                        onChangeText={setMode}
                        placeholderTextColor="#888"
                    />

                    <Text style={styles.label}>Type:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={type}
                            onValueChange={(itemValue) => setType(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Select Type" value="" enabled={false} />
                            <Picker.Item label="Income" value="income" />
                            <Picker.Item label="Spend" value="spend" />
                        </Picker>
                    </View>

                    <Text style={styles.label}>Amount:</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Enter Amount"
                        value={amount}
                        onChangeText={setAmount}
                        placeholderTextColor="#888"
                    />

                    <TouchableOpacity style={styles.addExpBtn} onPress={handleAddExpense}>
                        <Text style={styles.addExpBtnText}>Add Expense</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{ position: "absolute", bottom: 0, width: "100%", }}>
                <BotLayout />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    topContainer: {
        height: "10%",
        width: "100%",
        backgroundColor: "#047628",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    accountText: {
        color: "white",
        fontSize: 32
    },
    formContainer: {
        backgroundColor: "#fff",
        padding: 23,
        marginTop: "15%"
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: "#333",
        fontWeight: "500",
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
        backgroundColor: "#f8f8f8",
    },
    picker: {
        height: 55,
        color: "#333",
    },    
    addExpBtn: {
        backgroundColor: "#047628",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 15
    },
    addExpBtnText: {
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

export default ExpAddForm;