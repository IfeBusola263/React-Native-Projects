import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput.jsx";
import { useSelector } from "react-redux";

export default function AllExpensesScreen() {
  const expensesData = useSelector((state) => state.expenses.expenses);

  return (
    <ExpensesOutput
      expenses={expensesData}
      periodName="Total"
      fallbackText="No expenses registered"
    />
  );
}
