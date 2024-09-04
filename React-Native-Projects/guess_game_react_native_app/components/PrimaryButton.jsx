import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';


export default function PrimaryButton({children}){

    return (
	<View style={styles.buttonOuterContainer}>
	    <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{color: '#640233'}}>
		<Text style={styles.buttonText}>{children}</Text>
	</Pressable>
	</View>
    );
}


const styles = StyleSheet.create({
    buttonOuterContainer:{
	borderRadius: 28,
	margin: 4,
	overflow: 'hidden'
    },
    buttonInnerContainer: {
	backgroundColor: "#72063c",
	paddingVertical: 8,
	paddingHorizontal: 16
    },
    buttonText: {
	color: '#fff',
	textAlign: "center"
    },
    pressed: {
	opacity: 0.75
    }
});
