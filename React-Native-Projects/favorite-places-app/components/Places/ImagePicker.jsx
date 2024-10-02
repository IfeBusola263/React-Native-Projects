import { Button, View, Text, Alert, Image, StyleSheet } from "react-native";
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../utils/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker({ onImageTaken }) {
  const [camPermission, requestPermission] = useCameraPermissions();
  const [pickedImageUri, setPickedImageUri] = useState();

  // verify permissions
  async function verifyCameraPermissions() {
    // if permission status is undetermined ask for permission
    if (camPermission.status === "undetermined") {
      const requestedPermission = await requestPermission();
      return requestedPermission.granted;
    }

    // permission status cancel, give user alert
    if (camPermission.status === "denied") {
      Alert.alert(
        "Need Permission",
        "You need to grant permission to use Camera",
      );
      return false;
    }

    // permission granted return true
    if (camPermission.status === "granted") {
      return true;
    }
  }

  async function takeImageHandler() {
    const permissionGranted = await verifyCameraPermissions();

    if (!permissionGranted) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.2,
    });
    setPickedImageUri(image.assets[0].uri);
    onImageTaken(image.assets[0].uri);
  }

  let imagePreview = <Text>No image yet!</Text>;

  if (pickedImageUri) {
    imagePreview = (
      <Image source={{ uri: pickedImageUri }} style={styles.image} />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Photo
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
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
  image: {
    width: "100%",
    height: "100%",
  },
});
