import {Image, type ImageSourcePropType, StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/helpers';

type ImageProps = {
  profileImage: ImageSourcePropType;
  imageDimension?: number;
};

export const UserProfileImage = ({
  profileImage,
  imageDimension,
}: ImageProps) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={profileImage}
        alt="User Image"
        style={
          imageDimension
            ? {width: imageDimension, height: imageDimension}
            : null
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 0.7,
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(4),
    borderRadius: '50%',
  },
});
