import { MEALS, CATEGORIES } from "../data/dummy-data.js";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList.jsx";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId, title } = route.params;
  const categoryMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  // const categoryTitle = CATEGORIES.find((cate) => cate.id === categoryId).title;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [title]);

  return <MealsList items={categoryMeals} />;
}
