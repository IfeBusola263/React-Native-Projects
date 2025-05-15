import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {getFontFamily, scaleFontSize} from '../../utils/helpers';

type TitleProps = {
  text: string;
};

const Title = ({text}: TitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '700'),
    fontSize: scaleFontSize(24),
  },
});
