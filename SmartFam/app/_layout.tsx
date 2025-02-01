import { Stack } from "expo-router";
import { Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import boy from "../assets/images/boy.png";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Pacifico: Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: "#FFF",
        // headerStyle: { backgroundColor: "#2787fc" },
        headerTitle: () => (
          <Text
            style={{
              fontWeight: "bold",
              // fontStyle: "italic",
              // fontFamily: "Pacifico",
              fontSize: 20,
              color: "#000",
            }}
          >
            SmartFam
          </Text>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => console.log("Profile icon clicked")}>
            <Image source={boy} style={{ width: 40, height: 40, marginRight: 10 }} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
