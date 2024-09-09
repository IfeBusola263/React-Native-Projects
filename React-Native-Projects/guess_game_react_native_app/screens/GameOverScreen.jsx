import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title.jsx";
import { Colors } from "../utils/colors.js";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function GameOverScreen({
  startNewGame,
  numRounds,
  userNumber,
}) {
  const { width, height } = useWindowDimensions();

  const imageSize = height < 450 ? 100 : 300;
  const borderRad = height < 450 ? 50 : 150;

  return (
    <View style={styles.rootScreen}>
      <Title>Game Over!</Title>
      <View
        style={[
          styles.imageContainer,
          { width: imageSize, height: imageSize, borderRadius: borderRad },
        ]}
      >
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 200 : 300,
    height: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: deviceWidth < 380 ? 26 : 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: deviceWidth < 380 ? 20 : 24,
    textAlign: "center",
    fontFamily: "open-sans",
    marginBottom: deviceWidth < 380 ? 24 : 34,
  },
  highlight: {
    color: Colors.primary400,
    fontFamily: "open-sans-bold",
  },
});
