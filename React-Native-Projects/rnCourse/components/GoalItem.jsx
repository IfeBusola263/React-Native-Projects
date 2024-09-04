/* eslint-disable react/react-in-jsx-scope*/

import { StyleSheet, Text, View, Pressable } from "react-native";

export default function GoalItem({ text, id, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "#ddd" }}
        onPress={onDelete.bind(this, id)}
      >
        <Text style={styles.goaltext}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,
    borderRadius: 5,
    backgroundColor: "#000",
  },
  goaltext: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.6,
  },
});
