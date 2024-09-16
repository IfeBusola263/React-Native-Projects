import { View, Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function Button({ children, mode, onPress, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 4,
    padding: 8,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: Colors.primaryWhite,
    textAlign: "center",
    fontFamily: "poppins-reg",
  },
  flatText: {
    color: Colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});
