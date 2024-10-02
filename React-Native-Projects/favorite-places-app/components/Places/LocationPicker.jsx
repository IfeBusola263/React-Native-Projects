import { Text, Image, View, StyleSheet, Alert, Platform } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../utils/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useState, useEffect } from "react";
import getMapPreview from "../../utils/location.js";
import { getAddress } from "../../utils/location.js";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LocationPicker({ onLocationTaken }) {
  const [locationPermission, requestPermissions] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const pickedPlaceOnMap = route.params && route.params.selectedPlace;

  useEffect(() => {
    if (pickedPlaceOnMap) {
      async function fetchAddress() {
        setPickedLocation(pickedPlaceOnMap);
        const address = await getAddress(
          pickedPlaceOnMap.lat,
          pickedPlaceOnMap.lng,
        );
        onLocationTaken({ ...pickedPlaceOnMap, address });
      }

      fetchAddress();
    }
  }, [pickedPlaceOnMap, onLocationTaken]);

  async function verifyLocationPermissions() {
    // location permission is undefined
    if (locationPermission.status === "undetermined") {
      const requestedPermission = await requestPermissions();
      return requestedPermission.granted;
    }

    // location permission is denied
    if (locationPermission.status === "denied") {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant location permissions",
      );
      return false;
    }

    // location permission is granted
    if (locationPermission.status === "granted") {
      return true;
    }
  }

  async function getLocationHandler() {
    const permissionGranted = await verifyLocationPermissions();

    if (!permissionGranted) {
      return;
    }

    const location = await getCurrentPositionAsync({ accuracy: 6 });
    // debugger;
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }

  let locationPreview = <Text>No Location yet!</Text>;

  if (pickedLocation) {
    const uri = getMapPreview(pickedLocation.lat, pickedLocation.lng);
    locationPreview = <Image style={styles.image} source={{ uri: uri }} />;
  }

  function pickOnMapHandler() {
    navigation.navigate("Map", { coords: pickedLocation });
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.action}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
