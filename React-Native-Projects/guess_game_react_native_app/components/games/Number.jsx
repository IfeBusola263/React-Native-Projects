import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function Number({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.primaryAccent,
    borderWidth: 4,
    margin: 24,
    padding: 24,
    borderRadius: 8,
  },
  number: {
    fontSize: 36,
    color: Colors.primaryAccent,
    fontWeight: "bold",
  },
});
