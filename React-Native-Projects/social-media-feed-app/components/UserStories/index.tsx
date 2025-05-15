import {
  Image,
  ImageBackgroundProps,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  getFontFamily,
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/helpers';
import {UserProfileImage} from './UserProfileImage';

export type UserStoryProps = {
  firstName: string;
  profileImage: ImageSourcePropType;
};

export const UserStory = ({firstName, profileImage}: UserStoryProps) => {
  return (
    <View style={styles.container}>
      <UserProfileImage
        profileImage={profileImage}
        imageDimension={horizontalScale(65)}
      />
      <Text style={styles.firstName}>{firstName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    textAlign: 'center',
    color: '#022150',
    marginTop: verticalScale(8),
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '500'),
  },
});
