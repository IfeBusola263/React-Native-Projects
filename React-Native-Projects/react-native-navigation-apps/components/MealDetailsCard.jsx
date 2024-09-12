import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import MealDetails from "./MealDetails.jsx";
import Subtitle from "./Subtitle.jsx";
import List from "./List.jsx";

export default function MealDetailsCard() {
    const route = useRoute();
    const navigation = useNavigation()
  const {
    title,
    id,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params;

    useLayoutEffect(() => {
	navigation.setOptions({
	    headerBackTitleVisible: false
	});
    }, [navigation]);
 
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <MealDetails
          textStyle={styles.details}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <Subtitle>INGREDIENTS</Subtitle>
        <List data={ingredients} />
        <Subtitle>STEPS</Subtitle>
        <List data={steps} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  details: {
    color: "rgba(250, 250, 250, 0.8)",
  },
  text: {
    fontFamily: "lobster-regular",
    color: "rgba(250, 250, 250, 0.8)",
    fontSize: 36,
    textAlign: "center",
    margin: 16,
  },
  title: {
    fontSize: 24,
    color: "rgba(240, 240, 250, 0.85)",
    fontFamily: "muli-bold",
    textAlign: "center",
    padding: 8,
  },
});
