import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/db";

export default function AddPlace({ navigation }) {
  async function handleSavedPlace(place) {
    const result = await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm onSelectedData={handleSavedPlace} />;
}
