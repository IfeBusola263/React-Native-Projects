import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from 'react-native';

export default function IconButton({icon, size, color, onPress}){
    return(
	<Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress} >
	    <Ionicons name={icon} size={size} color={color} />
	</Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
	paddingHorizontal: 8,
	margin: 4,
	aligItems: 'center',
	justifyContent: 'center'
    },
    pressed: {
	opacity: 0.7
    }
})
