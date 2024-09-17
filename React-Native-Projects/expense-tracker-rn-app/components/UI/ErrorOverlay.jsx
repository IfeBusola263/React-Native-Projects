import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function ErrorOverlay({ message }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700,
  },
  title: {
    fontSize: 20,
    fontFamily: "poppins-reg",
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
  },
});
