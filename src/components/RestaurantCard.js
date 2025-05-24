import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import { Title } from "../../constants/styled-themes";

const restaurant = {
  name: "Some Restaurant",
  icon: {},
  photos: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  address: "100 Some Random Stree",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: false,
};

export default function RestaurantCard() {
  return (
    <Card elevation={5} style={styles.container}>
      <Card.Cover
        key={restaurant.name}
        style={styles.cover}
        source={{
          uri: restaurant.photos,
        }}
      />
      <Card.Content>
        <Title>{restaurant.name}</Title>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
    container: {
        
    },
    cover: {
        padding: 20,
    },
    title: {
        
    }
})