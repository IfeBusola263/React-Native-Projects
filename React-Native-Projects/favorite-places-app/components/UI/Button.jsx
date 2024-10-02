import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors'

export default function Button({onPress, children}){
    return(
	<Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
	    <Text style={styles.text}>{children}</Text>
	</Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
	backgroundColor: Colors.primary800,
	paddingHorizontal: 12,
	paddingVertical: 8,
	marginVertical: 8,
	marginHorizontal: 4,
	borderRadius: 4,
	elevation: 2,
	shadowColor: 'rgba(0, 0, 0, 0.8)',
	shadowOffset: {width: 1, height: 1},
	shadowRadius: 2
    },
    pressed: {
	opacity: 0.7
    },
    text: {
	color: Colors.primary50,
	textAlign: 'center',
	fontFamily: 'muli-bold',
	fontSize: 16
    }
});
