import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import BotLayout from "./BotLayout";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import close from "../../assets/images/close.png";

const ExpList = () => {

    const [expenses, setExpenses] = useState([]);
    const [noExp, setNoExp] = useState("");

    useEffect(() => {
        const handleGetExpenses = async () => {
            try {
                const token = await SecureStore.getItemAsync("user_token");
                if (!token) return;

                const response = await axios.get('http://172.16.147.47:6700/getExp', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                const expData = response.data.data[0];
                if (expData && expData.cart) {
                    setExpenses(expData.cart);
                }

            } catch (err) {
                const errorMessage = err.response?.data?.message || err.message || "Error fetching expenses";
                console.error(errorMessage);
            }
        }
        handleGetExpenses();
    }, []);

    useEffect(() => {
        if (expenses.length === 0) {
            setNoExp("You have no expenses yet.");
        } else {
            setNoExp("");
        }
    }, [expenses]);

    const handleDeleteExp = async (id) => {
        try {
            const token = await SecureStore.getItem("user_token");
            if (!token) return;

            await axios.delete(`http://172.16.147.47:6700/deleteExp/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setExpenses((prevExp) => prevExp.filter(exp => exp.id !== id));

        }
        catch (err) {
            console.error("Error deleting expense:", err.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Your Expenses</Text>
            </View>
            {noExp && <View style={styles.noExpContainer}>
                <Text style={{ fontSize: 20, color: "#686D76" }}>{noExp}</Text>
            </View>}
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ ...styles.list, paddingBottom: 80 }}
                renderItem={({ item }) => (
                    <View style={styles.exp}>
                        <View style={styles.left}>
                            <Text style={styles.expTitle}>{item.Title}</Text>
                            <Text style={styles.expMode}>Mode: {item.Mode}</Text>
                        </View>
                        <View style={styles.right}>
                            <TouchableOpacity onPress={() => { handleDeleteExp(item.id) }}>
                                <Image source={close} style={styles.closeImg} />
                            </TouchableOpacity>
                            <Text style={[styles.expAmount, { color: item.Type === "income" ? "green" : "red" }]}>
                                ₹{item.Amount}
                            </Text>
                        </View>
                    </View>
                )}
            />

            <View style={styles.footer}>
                <BotLayout />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8",
    },
    title: {
        height: "10%",
        backgroundColor: "#047628",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    titleText: {
        fontSize: 30,
        color: "white",
    },
    list: {
        paddingVertical: 20,
    },
    exp: {
        width: "92%",
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        minHeight: 90,
    },
    left: {
        flex: 3,
        justifyContent: "center",
    },
    right: {
        flex: 1,
        alignItems: "flex-end",
        height: "100%",
    },
    closeImg: {
        height: 13,
        width: 13
    },
    expTitle: {
        fontSize: 22,
        marginBottom: 5,
    },
    expMode: {
        fontSize: 16,
        color: "#666",
    },
    expAmount: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 15,
        padding:1
    },
    noExpContainer: {
        height: "80%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
});

export default ExpList;
