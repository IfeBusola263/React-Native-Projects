import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/Title.jsx";
import { Colors } from "../utils/colors.js";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function GameOverScreen({
  startNewGame,
  numRounds,
  userNumber,
}) {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{numRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={startNewGame}>Start a New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: 34,
  },
  highlight: {
    color: Colors.primary400,
    fontFamily: "open-sans-bold",
  },
});
