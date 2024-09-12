import { View, Text, StyleSheet } from "react-native";

export default function MealDetails({
  textStyle,
  duration,
  complexity,
  affordability,
}) {
  return (
    <View style={styles.details}>
      <Text
        style={[styles.detailsItem, { fontFamily: "open-sans" }, textStyle]}
      >
        {duration}
      </Text>
      <Text
        style={[styles.detailsItem, { fontFamily: "exo-semi-bold" }, textStyle]}
      >
        {complexity.toUpperCase()}
      </Text>
      <Text
        style={[styles.detailsItem, { fontFamily: "poppins-light" }, textStyle]}
      >
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
