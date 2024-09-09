import { StyleSheet, View, Text } from "react-native";
import { Colors } from "../utils/colors.js";
import { Shadow } from "react-native-shadow-2";

export default function GuessLogItem({ roundNumber, guessedNum }) {
  return (
    <Shadow
      stretch={true}
      offset={[0, 4]}
      style={styles.shadowStyle}
      containerStyle={styles.shadow}
      distance={4}
    >
      <View style={styles.listItem}>
        <Text style={styles.item}>#{roundNumber}</Text>
        <Text style={styles.item}>Opponent's Guess {guessedNum}</Text>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: Colors.primary500,
    borderRadius: 40,
    padding: 12,
    backgroundColor: Colors.primaryAccent,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  item: {
    fontFamily: "open-sans",
  },
  shadow: {
    marginVertical: 8,
    // borderRadius: 40,
    // borderWidth: 1,
    // borderColor: Colors.primary500
  },
  shadowStyle: {
    borderRadius: 40,
  },
});
