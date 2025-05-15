import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Root() {
  return (
    <View>
        <Text>Root Page</Text>
      <Link href="/products">Go to Product Page</Link>
    </View>
  );
}
