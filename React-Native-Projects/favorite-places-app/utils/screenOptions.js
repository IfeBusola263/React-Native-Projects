import IconButton from "../components/UI/IconButton";
import { Colors } from "./colors";

export const StackNavigatorScreenOptions = {
  headerStyle: { backgroundColor: Colors.primary500 },
  headerTintColor: Colors.gray700,
  contentStyle: { backgroundColor: Colors.gray700 },
  headerTitleStyle: { fontFamily: "cooper-hewitt-bold" },
  headerTitleAlign: "center",
};

export const AllPlacesScreenOptions = ({ navigation }) => ({
  title: "Favorite Places",
  headerRight: ({ color }) => (
    <IconButton
      icon="add-sharp"
      size={32}
      color={color}
      onPress={() => navigation.navigate("AddPlace")}
    />
  ),
});

export const AddPlaceScreenOptions = {
  title: "Add Place",
};
