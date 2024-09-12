import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.jsx";
import MealsOverviewScreen from "./screens/MealsOverviewScreen.jsx";
import MealDetailsScreen from "./screens/MealDetailsScreen.jsx";
import FavoritesScreen from "./screens/FavoritesScreen.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./hooks/useLoadFonts.js";
import {
  StackNavigatorScreenOptions,
  MealScreenOptions,
  MealDetailsScreenOptions,
  CategoriesScreenOptions,
  FavoritesScreenOptions,
  DrawerStackOptions,
  DrawerNavigatorScreenOptions,
} from "./utils/screenOptions.js";
import { fonts } from "./utils/fonts.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

SplashScreen.preventAutoHideAsync();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={DrawerNavigatorScreenOptions}>
      <Drawer.Screen
        name="AllCategories"
        component={CategoriesScreen}
        options={CategoriesScreenOptions}
      />
      <Drawer.Screen
        name="AllFavorites"
        component={FavoritesScreen}
        options={FavoritesScreenOptions}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontsLoaded, error] = useLoadFonts(fonts);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
            <Stack.Screen
              name="Meals Category"
              component={DrawerNavigator}
              options={DrawerStackOptions}
            />
            <Stack.Screen
              name="Meal Overview"
              options={MealScreenOptions}
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              options={MealDetailsScreenOptions}
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
