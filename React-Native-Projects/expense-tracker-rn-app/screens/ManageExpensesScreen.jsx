import { View, StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton.jsx";
import Button from "../components/UI/Button.jsx";
import { Colors } from "../utils/colors.js";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/expensesSlice.js";

export default function ManageExpensesScreen({ route, navigation }) {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const dispatch = useDispatch();

  function deleteExpenseHandler() {
    dispatch(removeExpense({ id: expenseId }));
    navigation.goBack();
  }

  function handleCancel() {
    navigation.goBack();
  }

  function handleConfirmation() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={handleCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirmation}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopColor: Colors.primary200,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
