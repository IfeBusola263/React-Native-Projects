import {
  View,
  StyleSheet,
  StatusBar,
  Alert,
  FlatList,
  Text,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title.jsx";
import Number from "../components/games/Number.jsx";
import generateRandomBetween from "../utils/random.js";
import { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton.jsx";
import InstructionText from "../components/InstructionText.jsx";
import Card from "../components/Card.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../utils/colors.js";
import GuessLogItem from "../components/GuessLogItem.jsx";

let upperBound = 100;
let lowerBound = 1;
const start = 1;
const end = 100;
const buttonSize = 24;

export default function GameScreen({ userNumber, onGameOver }) {
  let initialGuess = generateRandomBetween(start, end, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedNum, setGuessedNum] = useState([]);
  const { width, height } = useWindowDimensions();

  // handle game over and reset boundaries for a new game
  useEffect(() => {
    if (currentGuess === userNumber) {
      // inform the game over state in App.js
      onGameOver(guessedNum.length);
      lowerBound = 1;
      upperBound = 100;
    }
  }, [currentGuess, userNumber]);

  function verifyChoice(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Misleading", "Your direction is misleading the computer", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      // move number guessed to be lower bound
      upperBound = currentGuess;
    } else {
      // move upper bound to be guessed number
      lowerBound = currentGuess + 1;
    }

    setCurrentGuess(
      generateRandomBetween(lowerBound, upperBound, currentGuess),
    );
    setGuessedNum((prevGuessedNums) => [currentGuess, ...prevGuessedNums]);
  }

  let round = guessedNum.length;
  const renderItem = ({ item, index }) => (
    <GuessLogItem roundNumber={round - index} guessedNum={item} />
  );
  const keyExtractor = (item) => "key " + item;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
      <Card>
        <InstructionText style={styles.Text}>
          Should I go low or high?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => verifyChoice("lower")}>
              <Ionicons
                name="chevron-back-circle-outline"
                size={buttonSize}
                color={Colors.primaryAccent}
              />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={verifyChoice.bind(this, "higher")}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={buttonSize}
                color={Colors.primaryAccent}
              />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessedNum}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  Text: {
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
