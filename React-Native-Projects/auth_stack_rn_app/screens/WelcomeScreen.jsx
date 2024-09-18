import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import axios from "axios";

function WelcomeScreen() {
  const [serverData, setServerData] = useState("");
  const [error, setError] = useState();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(
          "https://expense-tracker-db-8e63c-default-rtdb.firebaseio.com/message.json?auth=" +
            authCtx.token,
        );
        setServerData(res.data);
      } catch (err) {
        setError("Something Went Wrong");
      }
    }

    getData();
  }, []);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      {serverData && <Text>{serverData}</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
