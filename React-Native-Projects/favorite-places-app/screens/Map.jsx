import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { useState, useLayoutEffect, useCallback } from "react";
import IconButton from "../components/UI/IconButton";
import { Alert } from "react-native";

export default function Map({ navigation, route }) {
  const initialCoords = route.params && route.params.coords;

  const coordinates = {
    latitude: initialCoords?.lat || 37.4219983,
    longitude: initialCoords?.lng || -122.084,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [markerCoords, setMarkerCoords] = useState(initialCoords);

  function markerHandler(event) {
    setMarkerCoords({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  }

  const saveLocationHandler = useCallback(() => {
    if (!markerCoords) {
      Alert.alert("Invalid Selection", "Please pick a location and save.");
      return;
    }

    navigation.navigate("AddPlace", { selectedPlace: markerCoords });
  }, [navigation, markerCoords]);

  useLayoutEffect(() => {
    if (!initialCoords) {
      navigation.setOptions({
        headerRight: ({ color }) => (
          <IconButton
            icon="save"
            size={24}
            color={color}
            onPress={saveLocationHandler}
          />
        ),
      });
    }
  }, [navigation, saveLocationHandler, initialCoords]);

  return (
    <MapView
      initialRegion={coordinates}
      style={styles.map}
      onPress={!initialCoords && markerHandler}
    >
      {markerCoords && (
        <Marker
          coordinate={{
            latitude: markerCoords.lat,
            longitude: markerCoords.lng,
          }}
          title="This is the Location"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
