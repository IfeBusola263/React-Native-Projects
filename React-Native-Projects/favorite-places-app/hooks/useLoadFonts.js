import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { init } from "../utils/db.js";

export default function useLoadResources(arrOfFonts) {
  const [fontsLoaded, error] = useFonts(arrOfFonts);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return [fontsLoaded, dbIsSet];
}
