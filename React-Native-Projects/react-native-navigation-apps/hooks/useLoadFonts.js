import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function useLoadFonts(arrOfFonts) {
  const [fontsLoaded, error] = useFonts(arrOfFonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return [fontsLoaded, error];
}
