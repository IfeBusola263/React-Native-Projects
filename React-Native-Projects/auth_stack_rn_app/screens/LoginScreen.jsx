import AuthContent from "../components/Auth/AuthContent";
import { useState, useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { login } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
  const [isAuthing, setIsAuthing] = useState(false);

  const authCtxt = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthing(true);

    try {
      const token = await login(email, password);
      authCtxt.authenticate(token);
      AsyncStorage.setItem("token", token);
    } catch {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, check credentials and try again",
      );
      setIsAuthing(false);
    }
  }

  if (isAuthing) {
    return <LoadingOverlay message="logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
