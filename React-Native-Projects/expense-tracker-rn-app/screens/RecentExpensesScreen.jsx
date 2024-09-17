import ExpensesOutput from "../components/Expenses/ExpensesOutput.jsx";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getDateMinusDays } from "../utils/date.js";
import { useEffect, useState } from "react";
import { setExpense } from "../store/expensesSlice.js";
import { fetchExpenses } from "../utils/http.js";
import LoadingOverlay from "../components/UI/LoadingOverlay.jsx";
import ErrorOverlay from "../components/UI/ErrorOverlay.jsx";

export default function RecentExpensesScreen() {
  // const
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const expensesData = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      try {
        const expensesData = await fetchExpenses();
        dispatch(setExpense(expensesData));
      } catch (err) {
        console.log(err);
        setError("Could not fetch expenses");
      }
      setIsFetching(false);
    }

    getExpenses();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
