import { StatusBar, StyleSheet } from "react-native";
import { colors, fontFamily, fonts, fontSizes, fontWeights, spacing } from "./theme";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 5,
    gap: 8,
  },
  searchView: {
    padding: spacing.lg,
  },
  cardTitle: {
    fontFamily: fontFamily.heading,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes.title,
  },
  subtitle: {
    fontFamily: fontFamily.body,
    fontSize: fontSizes.body,
  },
  restaurantCardCover: {
    padding: spacing.md,
  },
  list: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  beware: {
    color: colors.error,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes.caption,
  },
  storeTypeImage: {
    width: 25,
    aspectRatio: 1,
  }
});

