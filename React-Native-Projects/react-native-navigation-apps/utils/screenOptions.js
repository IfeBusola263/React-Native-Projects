import {
  Text,
  Platform,
  Pressable,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import HeaderRight from "../components/HeaderRight.jsx";
import MyIcon from "../components/icons/MyIcon.jsx";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoritesIcon from "../components/FavoritesIcon.jsx";

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
  title: "Meal Details",
  headerRight: ({ size, color }) => <FavoritesIcon size={size} color={color} />,
};

// Drawer
export const DrawerNavigatorScreenOptions = {
  drawerActiveBackgroundColor: "white", // background colour of the active screen on the drawer
  drawerActiveTintColor: "rgba(0,0, 100, 0.9)", // text(tint) colour of the active screen on the drawer
  drawerInactiveTintColor: "white", // text(tint) colour of the inactive screens on the drawer
  // drawerInactiveBackgroundColor: 'rgba(0,0, 100, 0.9)', background colour of the inactive screens on the drawer
  drawerLabelStyle: {
    fontFamily: "poppins-reg",
    // marginRight: -5
  },
  drawerStyle: {
    backgroundColor: "#24180f",
    borderWith: 8,
    borderColor: "white",
    // borderRadius: 24
  },
  drawerContentContainerStyle: {
    // Styling for the scrollview that wraps content in the drawer
    flex: 1,
    padding: 48,
    margin: 16,
    backgroundColor: "rgba(250, 250, 250, 0.2)",
    borderRadius: 20,
  },
  sceneContainerStyle: {
    backgroundColor: "#24180f",
  },
  drawerItemStyle: {
    justifyContent: "flex-end",
  },
  overlayColor: "rgba(250, 250, 250, 0.4)",
  headerStyle: { backgroundColor: "#351401" },
  headerTintColor: "#fafafd",
  headerTitleStyle: { fontFamily: "cooper-hewitt-bold" },
};

export const DrawerStackOptions = {
  headerShown: false,
};

export const CategoriesScreenOptions = {
  title: "All Categories",
  drawerLabel: "Meal Categories",
  // drawerLabel: ({focused, color, size}) => handleActiveLabelName(focused, color, size, 'Meal Categories'),
  drawerIcon: ({ focused, color, size }) => (
    <MyIcon name="restaurant-sharp" color={color} size={size} />
  ),
};

export const FavoritesScreenOptions = {
  title: "Favorites",
  drawerLabel: "Favorites",
  // drawerLabel: ({focused, color, size}) => handleActiveLabelName(focused, color, size, 'Favorites'),
  drawerIcon: ({ focused, color, size }) => (
    <MyIcon name="star-sharp" color={color} size={size} />
  ),
};

function handleActiveLabelName(focused, color, size, labelName) {
  return focused ? (
    <Text style={{ fontSize: 18, fontFamily: "poppins-reg" }}>
      {labelName}
      <Ionicons
        name="arrow-forward-circle-outline"
        size={18}
        color={color}
        style={{ marginTop: 12, paddingLeft: 16, marginRight: -32 }}
      />
    </Text>
  ) : (
    <Text style={{ fontSize: 14, fontFamily: "poppins-reg" }}>{labelName}</Text>
  );
}
