import { KeyboardAvoidingView, View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton.jsx";
import { Colors } from "../utils/colors.js";
import { useDispatch, useSelector } from "react-redux";
import {
  removeExpense,
  addExpense,
  updateExpense,
} from "../store/expensesSlice.js";
import ExpenseForm from "../components/ManageExpenses/ExpenseForm.jsx";

export default function ManageExpensesScreen({ route, navigation }) {
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

  function deleteExpenseHandler() {
    dispatch(removeExpense({ id: expenseId }));
    navigation.goBack();
  }

  function handleCancel() {
    navigation.goBack();
  }

  function handleSubmit(enteredData) {
    if (!isEditing) {
      dispatch(addExpense({ expense: enteredData }));
      console.log("Adding");
    } else {
      dispatch(updateExpense({ id: expenseId, ...enteredData }));
    }
    navigation.goBack();
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
