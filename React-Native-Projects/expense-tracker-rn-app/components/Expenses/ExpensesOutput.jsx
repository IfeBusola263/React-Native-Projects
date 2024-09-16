import ExpensesSummary from "./ExpensesSummary.jsx";
import ExpensesList from "./ExpensesList.jsx";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function ExpensesOutput({ expenses, periodName, fallbackText }) {
  let content;

  if (expenses.length == 0) {
    content = <Text style={styles.infoText}>{fallbackText}</Text>;
  } else {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={periodName} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
  },
  infoText: {
    color: Colors.primaryWhite,
    fontSize: 24,
    fontFamily: "poppins-light",
    textAlign: "center",
    marginTop: 32,
  },
});
