import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors'


export default function OutlinedButton({icon, children, onPress}){
    return(
	<Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
	    <Ionicons style={styles.icon} name={icon} color={Colors.primary500} size={24} />
	    <Text style={styles.text}>{children}</Text>
	</Pressable>
    )
}


const styles = StyleSheet.create({
    button: {
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	borderWidth: 1,
	borderColor: Colors.primary500,
	paddingVertical: 6,
	paddingHorizontal: 12,
	margin: 4,
	borderRadius: 20
    },
    pressed: {
	opacity: 0.7
    },
    text: {
	color: Colors.primary500,
	fontFamily: 'poppins-light'
    },
    icon: {
	marginRight: 6
    }
});
