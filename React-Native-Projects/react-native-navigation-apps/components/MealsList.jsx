import MealItem from "./MealItem.jsx";
import { FlatList, View, StyleSheet } from 'react-native';

const renderMealItems = ({ item }) => <MealItem {...item} />;

export default function MealsList({ items }){
    return(
    <View style={styles.container}>
      <FlatList
        data={items}
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
  }
});
