import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data.js";
import MealItem from "../components/MealItem.jsx";

const renderMealItems = ({ item }) => <MealItem {...item} />;

export default function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;
  const categoryMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
