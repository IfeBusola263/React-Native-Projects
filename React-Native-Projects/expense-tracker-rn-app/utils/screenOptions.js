import { Colors } from "./colors.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "../components/UI/IconButton.jsx";

// Stack

export const StackNavigatorScreenOptions = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTintColor: Colors.primaryWhite,
};
export const ExpensesOverViewOptions = {
  headerShown: false,
  title: "Expenses",
};

export const ManageExpensesOptions = {
  title: "Manage Expenses",
  presentation: "modal",
  //    animation: 'flip'
};

// Tabs

export const TabsNavigatorScreenOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: Colors.primary500,
  },
  headerTintColor: Colors.primaryWhite,
  tabBarStyle: {
    backgroundColor: Colors.primary500,
  },
  tabBarActiveTintColor: Colors.accent500,
  headerRight: ({ tintColor, color }) => (
    <IconButton
      icon="add-sharp"
      color={tintColor}
      size={24}
      onPress={() => navigation.navigate("ManageExpense")}
    />
  ),
});

export const RecentExpensesOptions = {
  title: "Recent Expenses",
  tabBarLabel: "Recent",
  tabBarIcon: ({ color, size }) => (
    <Ionicons name="hourglass" color={color} size={size} />
  ),
};

export const AllExpensesOptions = {
  title: "All Expenses",
  tabBarLabel: "All Expenses",
  tabBarIcon: ({ color, size }) => (
    <Ionicons name="calendar" color={color} size={size} />
  ),
};
