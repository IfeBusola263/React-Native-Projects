import { StyleSheet, Text } from "react-native";
import { Colors } from "../utils/colors.js";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.primaryWhite,
    textAlign: "center",
    color: Colors.primaryWhite,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
