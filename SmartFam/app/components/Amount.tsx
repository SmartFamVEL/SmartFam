import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import * as SecureStore from "expo-secure-store";
import axios from 'axios';

// Images
import income from '../../assets/images/income.png';
import spend from '../../assets/images/spend.png';

const Amount = () => {
  const [expenses, setExpenses] = useState([]);
  const [calculated, setCalculated] = useState({ income: 0, spend: 0, remaining: 0 });

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
  
  const expenseCalculation = () => {
      let income = 0;
      let spend = 0;
  
      expenses.forEach((item) => {
        if(item.Type==="income"){
          income += item.Amount;
        }
        else{
          spend += item.Amount;
        }
      });
  
      let remaining = income-spend;

      return {income,spend,remaining};
  }
  
  useEffect(() => {
    setCalculated(expenseCalculation());
  }, [expenses]);

  return (

    <View>
        <Text style={{ textAlign: "center", fontSize: 28, marginTop: 30}}>Remaining Amount: {calculated.remaining<0 ? `-₹${Math.abs(calculated.remaining)}` : `₹${calculated.remaining}`}</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
      }}>
        <View
          style={{
            height: 100,
            display: 'flex',
            flexDirection: 'row',
            width: 165,
            backgroundColor: "#47c06e",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            padding: 10,
          }}
        >
          <View style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image source={income} style={{ width: 40, height: 40, backgroundColor: "white", marginLeft: 80, borderRadius: 10 }} />
          </View>
          <View style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <Text style={{ color: "#FFF", fontSize: 20, }}>Income</Text>
            <Text style={{ color: "#FFF", fontSize: 25 }}>{"₹" + `${calculated.income}`}</Text>
          </View>
        </View>

        <View
          style={{
            height: 100,
            display: 'flex',
            flexDirection: 'row',
            width: 165,
            backgroundColor: "#e15454",
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            padding: 10,
          }}
        >
          <View style={{ height: "100%", width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image source={spend} style={{ width: 40, height: 40, backgroundColor: "white", marginLeft: 80, borderRadius: 10 }} />
          </View>
          <View style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <Text style={{ color: "#FFF", fontSize: 20, }}>Spend</Text>
            <Text style={{ color: "#FFF", fontSize: 25 }}>{"₹" + `${calculated.spend}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Amount;
