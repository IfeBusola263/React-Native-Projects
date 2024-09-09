import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Alert,
  Keyboard,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useState } from "react";
import { Colors } from "../utils/colors.js";
import Title from "../components/Title.jsx";
import Card from "../components/Card.jsx";
import InstructionText from "../components/InstructionText.jsx";

export default function StartGameScreen({ onPickNumber }) {
  const [enteredNum, setEnteredNum] = useState("");
  const { width, height } = useWindowDimensions();

  const marginTop = height < 450 ? 30 : 100;

  function handleReset() {
    setEnteredNum("");
  }

  function handleSubmit() {
    const num = parseInt(enteredNum);

    if (isNaN(num) || num <= 0 || num > 99) {
      Alert.alert(
        "Invalid Input",
        "Number must be greater than 0 and less than 99",
        [{ text: "Okay!", onPress: handleReset, style: "destructive" }],
      );
      // Keyboard.dismiss();
      return;
    }

    onPickNumber(num);
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title style={{ marginBottom: height < 450 ? 20 : 8 }}>
            Guess My Number...
          </Title>

          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad"
              scrollEnabled={false}
              returnTypeKey="done"
              maxLength={2}
              textAlign="center"
              onChangeText={setEnteredNum}
              value={enteredNum}
              placeholder="0"
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={handleSubmit}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    borderBottomColor: Colors.primaryAccent,
    borderBottomWidth: 2,
    height: 50,
    color: Colors.primaryAccent,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    width: 50,
    fontFamily: "open-sans-bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
