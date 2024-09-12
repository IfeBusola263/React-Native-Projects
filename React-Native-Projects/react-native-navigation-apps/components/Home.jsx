import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home(){
    const navigation = useNavigation();
    return(
	<View style={styles.container}>
	    <TouchableOpacity onPress={() => navigation.popToTop()}>
		<Text style={styles.text}>Home</Text>
	</TouchableOpacity>
	</View>
    );
}

const styles = StyleSheet.create({
    container: {
	alignItems: 'center'
    },
    text: {
	color: "rgba(250, 250, 250, 0.9)",
	fontFamily: "exo-semi-bold",
	textAlign: 'center',
	paddingRight: 8
    }
})
