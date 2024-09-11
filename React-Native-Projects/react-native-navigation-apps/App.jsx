import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen.jsx";
import HeaderRight from "./components/HeaderRight.jsx";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./hooks/useLoadFonts.js";
import {
  ScreenOptions,
  MealScreenOptions,
  CategoriesScreenOptions,
} from "./utils/screenOptions.js";
import { fonts } from "./utils/fonts.js";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useLoadFonts(fonts);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={ScreenOptions}>
          <Stack.Screen
            name="Meals Category"
            options={CategoriesScreenOptions}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="Meal Overview"
            options={MealScreenOptions}
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
