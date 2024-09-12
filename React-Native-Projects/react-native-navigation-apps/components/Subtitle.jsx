import { View, Text, StyleSheet } from 'react-native'

export default function Subtitle({children, style, textStyle}){
    return(
	<View style={styles.subtitleContainer}>
	    <Text style={[styles.text, textStyle]}>{children}</Text>
	</View>
    );
}


const styles = StyleSheet.create({
    subtitleContainer: {
	borderBottomWidth: 2,
	borderBottomColor: 'rgba(226, 180, 151, 0.85)',
	padding: 6,
    },
    text: {
	fontFamily: 'montserrat-med',
	fontSize: 18,
	textAlign: 'center',
	color: 'rgba(226, 180, 151, 0.95)'
    }
})
