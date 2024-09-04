/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope*/
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput({
  onPress,
  visible,
  placeHolder,
  onCancel,
}) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputCapture(enteredText) {
    setEnteredGoal(enteredText);
  }

  function handleAddGoal() {
    onPress(enteredGoal);
    setEnteredGoal("");
    onCancel();
  }

  return (
    <Modal visible={visible} animationType="slide" statusBarTranslucent={true}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goals.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputCapture}
          placeholder={placeHolder}
          autoCapitalize="none"
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={handleAddGoal} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3132a4",
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
  textInput: {
    padding: 16,
    borderColor: "teal",
    borderWidth: 3,
    width: "100%",
    backgroundColor: "#e4d0ff",
    borderRadius: 5,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
  },
  button: {
    margin: 8,
    width: "35%",
    color: "#fff",
  },
});
