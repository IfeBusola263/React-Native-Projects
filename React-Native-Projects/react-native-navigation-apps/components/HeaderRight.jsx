import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function HeaderRight() {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Alert Title", "My Alert Msg", [
            {
              text: "Ask me later",
              onPress: () => console.log("Ask me later pressed"),
              style: "destructive",
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
      >
        <Text style={styles.text}>Go Right</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    //fontFamily: "exo-semi-bold",
  },
});
