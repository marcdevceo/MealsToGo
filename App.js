import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/screens/restaurant";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


