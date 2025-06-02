import { Card } from "react-native-paper";
import { Image, Text, View } from "react-native";
import { globalStyles } from "../../constants/styles";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

const restaurant = {
  name: "Some Restaurant",
  icon: (props) => <Ionicons name="restaurant" size={25} color="black" />,
  photos: ["https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"],
  address: "100 Some Random Street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: true,
};

const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

export default function RestaurantCard() {
  return (
    <Card elevation={5}>
      <Card.Cover
        key={restaurant.name}
        source={{
          uri: restaurant.photos[0],
        }}
        style={globalStyles.restaurantCardCover}
      />
      <Card.Content>
        <Text style={globalStyles.cardTitle}>{restaurant.name}</Text>
        <View style={globalStyles.ratingContainer}>
          <View style={globalStyles.row}>
            {ratingArray.map((_, index) => (
              <MaterialIcons
                key={`star-${index}`}
                name="star"
                size={20}
                color="yellow"
              />
            ))}
          </View>
          <View style={globalStyles.row}>

            {restaurant.isClosedTemporarily && (
              <Text style={globalStyles.beware}>CLOSED TEMPORARILY</Text>
            )}

            {restaurant.isOpenNow && (
              <FontAwesome5 name="door-open" size={25} color="black" />
            )}
            {restaurant.icon && restaurant.icon({})}
          </View>
        </View>
        <Text style={globalStyles.subtitle}>{restaurant.address}</Text>
      </Card.Content>
    </Card>
  );
}
