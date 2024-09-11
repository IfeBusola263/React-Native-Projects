import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function CategoryItem({ title, color, onPress }) {
  return (
    <Shadow
      distance={4}
      stretch={true}
      offset={[0, 2]}
      containerStyle={styles.shadow}
    >
      <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.tilePressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    margin: 16,
  },
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  tilePressed: {
    opacity: 0.25, // Platform.select({ios: 0.25, android: 1 })
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "montserrat-bold",
  },
});
