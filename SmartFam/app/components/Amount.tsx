import React from 'react';
import { Text, View, Image } from 'react-native';

// Images
import save from '../../assets/images/salary.png';
import spend from '../../assets/images/spend.png';

const Amount = () => {
  const Amt = 1000;
  const Spent = 560;

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 70,
      marginLeft: 30,
      marginRight: 30,
    }}>
      <View
        style={{
          height: 140,
          width: 140,
          backgroundColor: "#47c06e",
          borderRadius: 20,
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
        <View style={{
          flexDirection: 'row',  
          alignItems: 'center', 
          gap: 10,  
        }}>
          <Image source={save} style={{ width: 40, height: 40 }} />
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            {"$" + `${Amt}`}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 140,
          width: 140,
          backgroundColor: "#e15454",
          borderRadius: 20,
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
        <View style={{
          flexDirection: 'row',  
          alignItems: 'center', 
          gap: 10, 
        }}>
          <Image source={spend} style={{ width: 40, height: 40 }} />
          <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>
            {"$" + `${Spent}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Amount;
