import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navigator from "./src/Navigator";
import { APIProvider } from "./src/core/apiProvider";

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    "Celias-Regular": require("./assets/fonts/Celias.ttf"),
    "Celias-Medium": require("./assets/fonts/Celias-Medium.ttf"),
    "Celias-Bold": require("./assets/fonts/Celias-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <APIProvider>
      <SafeAreaView style={styles.screen}>
        <StatusBar style="dark" backgroundColor="white" />
        <Navigator />
      </SafeAreaView>
    </APIProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
