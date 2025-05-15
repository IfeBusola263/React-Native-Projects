import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StyleSheet, Text, View} from 'react-native';
import {horizontalScale} from '../../utils/helpers';

type IconProps = {
  icon: IconProp;
  color: string;
  label: string | number;
};

const IconButton = ({icon, color, label}: IconProps) => {
  return (
    <View style={styles.buttonContainer}>
      <FontAwesomeIcon icon={icon} color={color} />
      <Text style={[styles.text, {color: color}]}>{label}</Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginRight: horizontalScale(20),
  },
  text: {
    marginLeft: horizontalScale(6),
  },
});
