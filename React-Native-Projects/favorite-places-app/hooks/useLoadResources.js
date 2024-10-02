import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { init } from "../utils/db.js";

export default function useLoadResources(arrOfFonts) {
  const [fontsLoaded, error] = useFonts(arrOfFonts);
  const [dbIsSet, setDbIsSet] = useState(false);

  useEffect(() => {
    if (!dbIsSet) {
      try {
        init();
        setDbIsSet(true);
      } catch {
        console.log("error Setting DB");
      }
    }
    if (fontsLoaded && dbIsSet) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, dbIsSet]);

  return [fontsLoaded, dbIsSet];
}
