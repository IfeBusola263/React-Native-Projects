import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useLoadFonts from "./hooks/useLoadFonts";
import { fonts } from "./utils/fonts.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecentExpensesScreen from "./screens/RecentExpensesScreen.jsx";
import AllExpensesScreen from "./screens/AllExpensesScreen.jsx";
import ManageExpensesScreen from "./screens/ManageExpensesScreen.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import {
  ExpensesOverViewOptions,
  StackNavigatorScreenOptions,
  ManageExpensesOptions,
  TabsNavigatorScreenOptions,
  RecentExpensesOptions,
  AllExpensesOptions,
} from "./utils/screenOptions.js";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <Tabs.Navigator screenOptions={TabsNavigatorScreenOptions}>
      <Tabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={RecentExpensesOptions}
      />
      <Tabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={AllExpensesOptions}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useLoadFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={ExpensesOverViewOptions}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpensesScreen}
              options={ManageExpensesOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
