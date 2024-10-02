import PlaceList from "../components/Places/PlaceList";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/db";

export default function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function getAllPlaces() {
      if (isFocused) {
        const allPlaces = await fetchPlaces();
        setLoadedPlaces(allPlaces);
      }
    }

    getAllPlaces();
  }, [isFocused]);

  // console.log(loadedPlaces);
  return <PlaceList places={loadedPlaces} />;
}
