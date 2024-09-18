import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useFetchAuthToken(authenticate) {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchToken() {
      try {
        const token = await AsyncStorage.getItem("token");
        authenticate(token);
        setIsFetching(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchToken();
  }, [authenticate]);

  return { isFetching };
}
