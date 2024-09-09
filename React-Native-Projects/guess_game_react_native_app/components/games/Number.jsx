import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function Number({ children }) {
  const { width, height } = useWindowDimensions();
  const alignSelf = height < 450 ? "center" : "stretch";
  const fontSize = height < 450 ? 24 : 36;
  const padding = height < 450 ? 12 : 24;
  const margin = height < 450 ? 12 : 24;
  return (
    <View
      style={[
        styles.container,
        { alignSelf: alignSelf, padding: padding, margin: margin },
      ]}
    >
      <Text style={[styles.number, { fontSize: fontSize }]}>{children}</Text>
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
    alignSelf: "stretch",
  },
  number: {
    fontSize: 36,
    color: Colors.primaryAccent,
    fontWeight: "bold",
  },
});
