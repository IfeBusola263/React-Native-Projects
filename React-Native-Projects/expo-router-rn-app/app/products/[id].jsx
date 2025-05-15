import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function ProductItem(){
    
    const {id} = useLocalSearchParams();

    return <View>
        <Text>Product: {id}</Text>
        <Link href='/products'>Go Back</Link>
    </View>
}