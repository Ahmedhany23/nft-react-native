import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { Stack } from "expo-router";

export default function App() {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar
        style={scheme === "light" ? "dark" : "light"}
        animated={true}
      />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Expo Router automatically creates routes based on files in /app */}
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="nft-details" />
      </Stack>
    </>
  );
}
