import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem.jsx";

const renderItem = ({ item }) => <ExpenseItem {...item} />;
const keyExtractor = (item) => item.id;

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
}
