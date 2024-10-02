import { FlatList, View, Text, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const renderItem = (item, navigation) => (
  <PlaceItem
    place={item}
    onSelect={() => navigation.navigate("PlaceDetails", { id: item.id })}
  />
);

export default function PlaceList({ places }) {
  const navigation = useNavigation();

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackTextContainer}>
        <Text style={styles.fallbackText}>
          There are no Places yet - Please add Places
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={({ item }) => renderItem(item, navigation)}
      keyExtractor={(item) => item.id}
      showVerticalScrollBar={false}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallBackTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primaryWhite,
  },
});
