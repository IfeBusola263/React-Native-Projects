import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../utils/colors";
import { useEffect, useState } from "react";
import { fetchPlace } from "../utils/db";

export default function PlacesDetails({ route, navigation }) {
  const [placeInfo, setPlaceInfo] = useState();

  const id = route.params.id;
  function showOnMapHandler() {
    navigation.navigate("Map", { coords: placeInfo });
  }

  useEffect(() => {
    async function getPlace() {
      const place = await fetchPlace(id);
      setPlaceInfo(place);
    }

    getPlace();
  }, [id]);

  return (
    <>
      {placeInfo && (
        <ScrollView>
          <Image style={styles.image} source={{ uri: placeInfo.imageUrl }} />
          <View style={styles.locationContainer}>
            <View style={styles.addressContainer}>
              <Text style={styles.address}>{placeInfo.address}</Text>
            </View>
            <OutlinedButton icon="map" onPress={showOnMapHandler}>
              View onMap
            </OutlinedButton>
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
