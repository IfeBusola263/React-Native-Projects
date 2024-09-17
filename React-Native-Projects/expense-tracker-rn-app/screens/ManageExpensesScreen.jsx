import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import { useLayoutEffect, useState } from "react";
import IconButton from "../components/UI/IconButton.jsx";
import { Colors } from "../utils/colors.js";
import { useDispatch, useSelector } from "react-redux";
import {
  removeExpense,
  addExpense,
  updateExpense,
} from "../store/expensesSlice.js";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm.jsx";
import { storeExpenses, modifyExpense, deleteExpense } from "../utils/http.js";
import LoadingOverlay from "../components/UI/LoadingOverlay.jsx";
import ErrorOverlay from "../components/UI/ErrorOverlay.jsx";

export default function ManageExpensesScreen({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses);
  let expense;

  if (isEditing) {
    expense = expenses.find((expense) => expense.id === expenseId);
  }

  async function deleteExpenseHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(expenseId);
      dispatch(removeExpense({ id: expenseId }));
      navigation.goBack();
    } catch (err) {
      setIsSubmitting(false);
      setError("Could not Delete Expense");
    }
  }

  function handleCancel() {
    navigation.goBack();
  }

  async function handleSubmit(enteredData) {
    setIsSubmitting(true);
    if (!isEditing) {
      try {
        const id = await storeExpenses(enteredData);
        enteredData.id = id;
        dispatch(addExpense({ expense: enteredData }));
        navigation.goBack();
      } catch (err) {
        setIsSubmitting(false);
        setError("Could not add a new Expense, Something went wrong!");
      }
    } else {
      try {
        await modifyExpense(expenseId, enteredData); // for https request
        dispatch(updateExpense({ id: expenseId, ...enteredData })); // for store
        navigation.goBack();
      } catch (err) {
        setIsSubmitting(false);
        setError("Could not Update this Expense try again!");
      }
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="position">
      <ExpenseForm
        onCancel={handleCancel}
        confirmText={isEditing ? "Update" : "Add"}
        onSubmit={handleSubmit}
        expenseData={expense}
      />
      {isEditing && (
        <View style={styles.buttonContainer}>
          <IconButton
            icon="trash"
            color={Colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  buttonContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: Colors.primary200,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
