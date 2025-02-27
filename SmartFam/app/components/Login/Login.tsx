import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, Image, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../index";
import { useNavigation } from "expo-router";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import gog from "../../../assets/images/gog.png";

type Loginprops = {
    navigation: StackNavigationProp<RootStackParamList, "Login">;
    setProptoken: (token: string) => void; 
};

const Login: React.FC<Loginprops> = ({setProptoken}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            const Data = { email, password };
            const response = await axios.post("http://172.16.147.47:6700/getUser", Data);

            if (response.status === 200) {
                const token = response.data.token?.Token;
                const userId = response.data.userId;

                if (token) {
                    await SecureStore.setItemAsync("user_token", token);
                    await SecureStore.setItemAsync("user_id", userId);
                    setProptoken(token);
                }

                setEmail("");
                setPassword("");
                navigation.navigate("Land");
            }
        } catch (err) {
            Alert.alert("Login Failed", err.response?.data?.message || "Error logging user");
            console.error(err.response?.data?.message || "Error logging user");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Welcome to</Text>
                <Text style={styles.headerTextBold}>SmartFam</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Email"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Password:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholderTextColor="#888"
                />

                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.google}>
                    <TouchableOpacity style={styles.googleButton}>
                        <Image source={gog} style={styles.googleIcon} />
                        <Text style={styles.googleText}>Continue With Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                        <Text style={styles.signupLink}>Don't have an account? Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#047628",
        paddingVertical: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    headerText: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "300",
    },
    headerTextBold: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "700",
    },
    formContainer: {
        height: "90%",
        backgroundColor: "#fff",
        padding: 30,
        position: "relative",
        top: -50,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#FFF",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 10,
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
    forgotPasswordText: {
        color: "#047628",
        textAlign: "right",
        marginBottom: 25,
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: "#047628",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
    },
    loginButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    google: {
        marginTop: 90,
    },
    googleButton: {
        flexDirection: "row",
        alignItems: "center",
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
    googleIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    googleText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333",
    },
    signupContainer: {
        marginTop: 30,
        alignItems: "center",
    },
    signupLink: {
        color: "#047628",
        fontSize: 16,
        textDecorationLine: "underline",
    },
});

export default Login;
