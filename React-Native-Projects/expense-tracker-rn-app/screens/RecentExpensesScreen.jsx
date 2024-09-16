import ExpensesOutput from "../components/Expenses/ExpensesOutput.jsx";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date.js";

export default function RecentExpensesScreen() {
  const expensesData = useSelector((state) => state.expenses.expenses);
  const recentExpenses = expensesData.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return new Date(expense.date) > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName="Last 7 days"
      fallbackText="No recent expenses!"
    />
  );
}
