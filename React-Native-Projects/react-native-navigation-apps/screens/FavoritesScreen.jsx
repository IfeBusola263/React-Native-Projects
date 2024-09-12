import { Text, StyleSheet, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList.jsx";
import { MEALS } from "../data/dummy-data.js";
import { LinearGradient } from "expo-linear-gradient";

export default function FavoritesScreen({ navigation }) {
  const ids = useSelector((state) => state.fave.ids);

  function moveToCategories() {
    navigation.jumpTo("AllCategories");
  }

  if (ids.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no Favorite Meals Yet!</Text>
        <View style={styles.redirectButton}>
          <LinearGradient
            style={styles.background}
            colors={["rgba(219, 147, 134, 0.8)", "rgba(250, 250, 200, 0.7)"]}
          >
            <Pressable onPress={moveToCategories}>
              <Text style={styles.buttonText}>Check the Meals Category</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    );
  }

  const faveMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealsList items={faveMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgba(250, 250, 230, 0.8)",
    fontSize: 36,
    fontFamily: "poppins-reg",
    textAlign: "center",
  },
  redirectButton: {
    margin: 8,
    borderColor: "rgba(204, 204, 204, 0.6)",
    borderWidth: 2,
    borderRadius: 20,
    overflow: "hideen",
  },
  buttonText: {
    color: "rgba(53, 20, 1, 0.8)",
    fontFamily: "montserrat-med",
  },
  background: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
});
