import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";

export default function ProductPage() {
  return (
    <View>
      <Text>Product Page</Text>
      <Link style={styles.link} href="/products/2" asChild>
        <Pressable>
          <Text>Go to products details 2</Text>
        </Pressable>
      </Link>
      <Link style={styles.link} push href="./4" asChild>
        <Pressable>
          <Text>Go to products details 4</Text>
        </Pressable>
      </Link>
      <Link
        style={styles.link}
        href={{ pathname: "products/[id]", params: { id: 7 } }}
      >
        Go to products details 7
      </Link>
      <Pressable onPress={() => router.push({pathname: 'products/[id]', params: { id: 10}})}>
          <Text>Go to products details 10</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    marginVertical: 8,
  },
});
