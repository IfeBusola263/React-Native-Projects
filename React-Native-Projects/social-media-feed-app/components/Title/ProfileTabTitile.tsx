import {StyleSheet, Text} from 'react-native';
import {getFontFamily, scaleFontSize} from '../../utils/helpers';

type ProfileTabTitleProps = {
  title: string;
  isFocused: boolean;
};

const ProfileTabTitle = ({title, isFocused}: ProfileTabTitleProps) => {
  return <Text style={isFocused ? styles.focused : styles.title}>{title}</Text>;
};

export default ProfileTabTitle;

const styles = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
  },
  focused: {
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontSize(18),
    color: '#022150',
  },
});
