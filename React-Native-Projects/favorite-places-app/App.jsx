import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import PlaceDetails from "./screens/PlaceDetails";
import {
  AllPlacesScreenOptions,
  StackNavigatorScreenOptions,
  AddPlaceScreenOptions,
} from "./utils/screenOptions";
import * as SplashScreen from "expo-splash-screen";
import useLoadResources from "./hooks/useLoadResources";
import { fonts } from "./utils/fonts";
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, dbIsSet] = useLoadResources(fonts);

  if (!fontsLoaded || !dbIsSet) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={StackNavigatorScreenOptions}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={AllPlacesScreenOptions}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={AddPlaceScreenOptions}
          />
            <Stack.Screen name="Map" component={Map} />
	    <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
