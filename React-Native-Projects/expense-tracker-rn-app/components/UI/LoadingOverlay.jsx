import { View, ActivityIndicator, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primaryWhite} />
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
});
