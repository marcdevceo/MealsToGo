import { SafeAreaView, View, Text, StyleSheet, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantCard from "../components/RestaurantCard";

export default function RestaurantScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
      },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});