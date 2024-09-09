import {
  ImageBackground,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen.jsx";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useCallback, useEffect } from "react";
import GameScreen from "./screens/GameScreen.jsx";
import GameOverScreen from "./screens/GameOverScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./utils/colors.js";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// Keep the splash screen visible while fetching resources

SplashScreen.preventAutoHideAsync();

export default function App() {
  // const fonts =
  const [pickedNum, setPickedNum] = useState(null);
  const [gameOver, setGameOver] = useState(true); // because at the start game is over
  const [numRounds, setNumRounds] = useState(0);
  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function handlePickNumber(enteredValue) {
    setGameOver(false);
    setPickedNum(enteredValue);
  }

  function handleGameOverNotification(rounds) {
    setGameOver(true);
    setNumRounds(rounds);
  }

  function handleStartNewGame() {
    setPickedNum(null);
    setNumRounds(0);
  }

  // If fonts are not loaded yet the loading screen still shows
  useEffect(() => {
    if (!loaded) return;

    if (loaded) {
      (async function () {
        try {
          await SplashScreen.hideAsync();
          // console.log("fontsLoaded");
        } catch (error) {
          console.log("error:", error);
        }
      })();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // start screen
  let screen = <StartGameScreen onPickNumber={handlePickNumber} />;

  // game main screen
  if (pickedNum) {
    screen = (
      <GameScreen
        userNumber={pickedNum}
        onGameOver={handleGameOverNotification}
      />
    );
  }

  // Game Over screen
  if (gameOver && pickedNum) {
    screen = (
      <GameOverScreen
        userNumber={pickedNum}
        numRounds={numRounds}
        startNewGame={handleStartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary500, Colors.primaryAccent]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
