import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from '@react-navigation/native';
import MealDetails from '../components/MealDetails.jsx'

export default function MealItem(props) {
  const {
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
} = props
    const navigation = useNavigation();
  return (
    <Shadow
      stretch={true}
      distance={4}
      offset={[0, 4]}
      containerStyle={styles.shadow}
    >
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
	    onPress={() => navigation.navigate('MealDetails', {...props})}
        >
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
            <MealDetails {...props} /> 
        </Pressable>
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    margin: 16,
  },
  container: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  pressed: {
    opacity: Platform.select({ ios: 0.7, android: 1 }),
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "muli-bold",
    textAlign: "center",
    fontSize: 18,
    padding: 8,
  }
});
