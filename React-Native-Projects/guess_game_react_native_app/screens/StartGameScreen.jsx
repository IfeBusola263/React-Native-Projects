import { TextInput, View, StyleSheet } from "react-native";

import PrimaryButton from "../components/PrimaryButton.jsx";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        scrollEnabled={false}
        returnTypeKey="done"
        maxLength={2}
        textAlign="center"
      />
      <PrimaryButton>Reset</PrimaryButton>

      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4e0329",
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  numberInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    height: 50,
    color: "#ddb52f",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    width: 50,
  },
});
