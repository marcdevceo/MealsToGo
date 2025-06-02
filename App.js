import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import RestaurantScreen from "./src/screens/restaurant";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); 

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald: require("./assets/fonts/Oswald-Regular.ttf"),
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
  });

    useEffect(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


