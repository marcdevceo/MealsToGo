import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantCard from "../components/RestaurantCard";
import { globalStyles } from "../../constants/styles";

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.searchView}>
        <Searchbar />
      </View>
      <View style={globalStyles.list}>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  );
}


