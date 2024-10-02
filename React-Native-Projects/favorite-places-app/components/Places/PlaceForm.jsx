import { Text, TextInput, View, ScrollView, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { useState } from "react";
import Place from "../../models/place";

export default function PlaceForm({ onSelectedData }) {
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [enteredTitle, setEnteredTitle] = useState();

  function enteredTextHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function savePlaceHandler() {
    const location = { lat: selectedLocation.lat, lng: selectedLocation.lng };
    const place = new Place(
      enteredTitle,
      selectedLocation.address,
      location,
      selectedImage,
    );
    onSelectedData(place);
  }

  return (
    <View style={styles.formContainer}>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} onChangeText={enteredTextHandler} />
        </View>
        <ImagePicker onImageTaken={setSelectedImage} />
        <LocationPicker onLocationTaken={setSelectedLocation} />
        <Button onPress={savePlaceHandler}>Add Place</Button>
      </ScrollView>
    </View>
  );
}

const styles = {
  formContainer: {
    flex: 1,
  },
  form: {
    padding: 24,
  },
  label: {
    fontFamily: "open-sans",
    color: Colors.primary700,
  },
  input: {
    backgroundColor: Colors.primary100,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    fontSize: 16,
  },
};
