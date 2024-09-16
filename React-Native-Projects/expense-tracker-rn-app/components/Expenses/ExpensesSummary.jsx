import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}> $ {expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    fontFamily: "montserrat-bold",
    color: Colors.primary400,
  },
  sum: {
    fontFamily: "montserrat-bold",
    fontSize: 16,
    color: Colors.primary500,
  },
});
