import { Platform } from "react-native";
import HeaderRight from "../components/HeaderRight.jsx";
import Home from '../components/Home.jsx';

// Stack

export const StackNavigatorScreenOptions = {
  autoHideHomeIndicator: true,
  animationTypeForReplace: "push",
  // animation: 'slide_from_bottom',
  // presentation: 'modal',
  headerBackButtonMenuEnabled: false,
  headerStyle: { backgroundColor: "#351401" },
  headerTintColor: "#fafafd",
  headerBackVisible: true,
  // headerBackTitle: "Go Back", // only on IOS
  headerBackTitleVisible: true, // makes the title on the back button disappear, only on IOS
  headerBackTitleStyle: { fontSize: 14 }, // only IOS
  headerLargeTitle: true, // IOS only, has an amazing effect on header, but you need a scrollView or flatList and set the contentInsetAdjustmentBehavior="automatic" on the component
  headerLargeTitleShadowVisible: true,
  headerLargeTitleStyle: {
    fontSize: 48,
    fontFamily: "bebas",
    fontWeight: "bold",
    color: "rgba(250, 250, 250, 0.75)",
  }, // the style of the large header before it collapses after a scroll
  headerShown: true, // trigger if the entire header is shown or not, not just the title
  headerShadowVisible: true,
  headerTransparent: Platform.select({ ios: true, android: false }),
  headerBlurEffect: "dark",
  headerTitleAlign: "center",
  headerSearchBarOptions: {
    autoCapitalize: "words",
    autoFocus: false,
    placeholder: "Search", // only on Android
    disableBackButtonOverride: true, // only on android
    hintTextColor: "#fafdfb",
  },
  contentStyle: {
    backgroundColor: "#24180f",
  },
  headerTitleStyle: { fontFamily: "cooper-hewitt-bold" },
  // statusBarAnimation: 'slide'
};



export const MealScreenOptions = {
    headerRight: () => <HeaderRight />,
};

export const MealDetailsScreenOptions = {
    title: 'Meal Details',
    headerRight: () => <Home />
}



// Drawer
export const DrawerNavigatorScreenOptions = {
    drawerStyle: {
	backgroundColor: "#24180f"
    },
    drawerContentStyle: {
	backgroundColor: "#24180f"
    },
    sceneContainerStyle: {
	backgroundColor: "#24180f"
    },
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "#fafafd",
}

export const DrawerStackOptions = {
    headerShown: false
}

export const CategoriesScreenOptions = {
    title: "All Categories",
};

export const FavoritesScreenOptions = {
    title: 'Favorites'
}
