import { CATEGORIES } from "../data/dummy-data.js";
import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "../components/CategoryItem.jsx";

const renderItem = (item, navigation) => {
  return (
    <CategoryItem
      title={item.title}
      color={item.color}
      onPress={() =>
        navigation.navigate("Meal Overview", {
          categoryId: item.id,
          title: item.title,
        })
      }
    />
  );
};

const keyExtractor = (item) => {
  return item.id;
};

export default function CategoriesGrid({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => renderItem(item, navigation)}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentInsetAdjustmentBehavior="automatic"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
