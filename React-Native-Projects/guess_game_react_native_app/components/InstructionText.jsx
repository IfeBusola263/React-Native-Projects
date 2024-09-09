import { Colors } from "../utils/colors.js";
import { Text, StyleSheet } from "react-native";
export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.secondaryWhite,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
