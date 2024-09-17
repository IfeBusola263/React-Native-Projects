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
  const [inputs, setInputs] = useState({
    amount: {
      value: expenseData ? "" + expenseData.amount : "",
      isValid: true,
    },
    date: {
      value: expenseData ? expenseData.date : "",
      isValid: true,
    },
    description: {
      value: expenseData ? expenseData.description : "",
      isValid: true,
    },
  });

  function handleInputChange(identifier, enteredValue) {
    setInputs((prevInput) => ({
      ...prevInput,
      [identifier]: { value: enteredValue, isValid: true },
    }));
  }

  function handleConfirmation() {
    const inputData = {
      amount: +inputs.amount.value,
      date: inputs.date.value,
      description: inputs.description.value,
    };

    // validate Inputs
    const amtIsValid = !isNaN(inputData.amount) && inputData.amount > 0;
    const dateIsValid = new Date(inputData.date).toString() !== "Invalid Date";
    const descIsValid = inputData.description.trim().length > 3;

    if (!amtIsValid || !dateIsValid || !descIsValid) {
      setInputs((currInputs) => {
        return {
          amount: {
            value: currInputs.amount.value,
            isValid: amtIsValid,
          },
          date: {
            value: currInputs.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: currInputs.description.value,
            isValid: descIsValid,
          },
        };
      });
      return;
    }

    onSubmit(inputData);
  }
  const formIsValid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

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
            value: inputs.amount.value,
          }}
          invalid={!inputs.amount.isValid}
        />
        <Input
          label="Date"
          style={styles.row}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: handleInputChange.bind(this, "date"),
            value: inputs.date.value,
          }}
          invalid={!inputs.date.isValid}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          placeholder: "Your Description should be above 3 characters",
          onChangeText: handleInputChange.bind(this, "description"),
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {formIsValid && <Text style={styles.errorText}>Check your inputs</Text>}
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
  errorText: {
    fontFamily: "muli-bold",
    color: Colors.error500,
    textAlign: "center",
    margin: 8,
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
