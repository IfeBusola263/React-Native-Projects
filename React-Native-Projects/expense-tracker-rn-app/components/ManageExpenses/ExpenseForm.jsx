import Input from "./Input.jsx";
import { View, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { Colors } from "../../utils/colors.js";
import { useState } from "react";
import Button from "../../components/UI/Button.jsx";

export default function ExpenseForm({
  onCancel,
  confirmText,
  onSubmit,
  expenseData,
}) {
  const [inputValues, setInputValues] = useState({
    amount: expenseData ? "" + expenseData.amount : "",
    date: expenseData ? expenseData.date : "",
    description: expenseData ? expenseData.description : "",
  });

  function handleInputChange(identifier, enteredValue) {
    setInputValues((prevInput) => ({
      ...prevInput,
      [identifier]: enteredValue,
    }));
  }

  function handleConfirmation() {
    const inputData = {
      amount: +inputValues.amount,
      date: inputValues.date,
      description: inputValues.description,
    };

    // validate Inputs
    const amtIsValid = !isNaN(inputData.amount) && inputData.amount > 0;
    const dateIsValid = inputData.date.toString() !== "Invalid Date";
    const descIsValid = inputData.description.trim() > 0;

    onSubmit(inputData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          style={styles.row}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: handleInputChange.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          label="Date"
          style={styles.row}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: handleInputChange.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: handleInputChange.bind(this, "description"),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleConfirmation}>
          {confirmText}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    color: Colors.primaryWhite,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 24,
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row: {
    flex: 1,
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
});
