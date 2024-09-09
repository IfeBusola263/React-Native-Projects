import { StyleSheet, Text, useWindowDimensions } from "react-native";
import { Colors } from "../utils/colors.js";

export default function Title({ children, style }) {
        const {width, height} = useWindowDimensions();

    const landScapeView = {
	...style,
	fontSize : height < 450 ? 20 : 24,
	padding : height < 450 ? 8 : 12,
    }

    
    return <Text style={[styles.title, landScapeView]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.primaryWhite,
    textAlign: "center",
    color: Colors.primaryWhite,
    fontSize: 24,
    fontFamily: "open-sans-bold",
    maxWidth: "80%",
  },
});
