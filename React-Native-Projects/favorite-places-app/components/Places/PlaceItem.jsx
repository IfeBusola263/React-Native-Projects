import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/colors";

export default function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image style={styles.image} source={{ uri: place.imageUrl }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontFamily: "montserrat-bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    fontFamily: "open-sans",
    color: Colors.gray700,
  },
});
