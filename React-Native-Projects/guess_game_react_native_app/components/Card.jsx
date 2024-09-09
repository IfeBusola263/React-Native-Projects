import { StyleSheet, View, useWindowDimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { Colors } from "../utils/colors.js";

export default function Card({ children }) {
  const { width, height } = useWindowDimensions();

  const shadowMarginLandScape = {
    marginTop: height < 450 ? 8 : 36,
    marginHorizontal: height < 450 ? 48 : 24,
  };

  const innerContainerLandScape = {
    padding: height < 450 ? 10 : 16,
  };

  return (
    <Shadow
      stretch={true}
      distance={10}
      containerStyle={[styles.shadow, shadowMarginLandScape]}
      style={[styles.inputContainer, innerContainerLandScape]}
      offset={[0, 3]}
    >
      <View style={styles.inputContainer}>{children}</View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary600,
    padding: 16,
    borderRadius: 8,
    // elevation: 4,
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 4 },
    // shadowRadius: 10,
    // shadowOpacity: 0.3,
  },
  shadow: {
    // marginHorizontal: 24,
    // marginTop: 36,
    alignSelf: "stretch",
  },
});
