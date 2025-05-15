import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {getFontFamily, scaleFontSize} from '../../utils/helpers';
import {GlobalStyles} from '../../utils/Styles';

type UserProfileProps = {
  title: string;
  label: string;
  customStyles?: StyleProp<ViewStyle>;
};

const UserProfileDetails = ({title, label, customStyles}: UserProfileProps) => {
  return (
    <View style={[styles.detailsContainer, customStyles]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default UserProfileDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
  },
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
    textTransform: 'capitalize',
    flex: 1,
  },
});
