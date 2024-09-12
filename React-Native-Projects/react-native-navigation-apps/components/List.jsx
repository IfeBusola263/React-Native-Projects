import { View, Text, StyleSheet } from 'react-native'

export default function List({data, textStyle, style}){

    return data.map((dataItem) => 
	<View key={dataItem} style={[styles.listItem, style]}>
	    <Text style={[styles.text, textStyle]}>{dataItem}</Text>
	</View>
    );
}

const styles = StyleSheet.create({
    listItem: {
	// maxWidth: '80%',
	backgroundColor: 'rgba(226, 180, 151, 0.85)',
	borderRadius: 6,
	paddingHorizontal: 8,
	paddingVertical: 4,
	marginVertical: 4,
	marginHorizontal: 12,
	justifyContent: 'center',
	alignItems: 'center'
    },
    listText: {
	color: 'rgba(0,0,0, 0.95)',
	fontFamily: 'open-sans',
    }

})
