import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../utils/auth";
import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Alert } from "react-native";

function SignupScreen({ navigate }) {
  const [isAuthing, setIsAuthing] = useState(false);
  const authCtxt = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthing(true);
    try {
      const token = await createUser(email, password);
      authCtxt.authenticate(token);
      AsyncStorage.setItem("token", token);
    } catch {
      Alert.alert("Authentication Failed", "Could not create new user");
      setIsAuthing(false);
    }
  }

  if (isAuthing) {
    return <LoadingOverlay message="Creating new user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
