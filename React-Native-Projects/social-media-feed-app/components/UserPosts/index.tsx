import {Image, StyleSheet, Text, View} from 'react-native';
import {UserProfileImage} from '../UserStories/UserProfileImage';
import {
  getFontFamily,
  horizontalScale,
  scaleFontSize,
  verticalScale,
  type UserPost as UserPostProps,
} from '../../utils/helpers';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookBookmark,
  faEllipsisH,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import IconButton from '../Icons/IconButton';
import {faBookmark, faMessage} from '@fortawesome/free-regular-svg-icons';
import {GlobalStyles} from '../../utils/Styles';

const UserPost = ({
  firstName,
  lastName,
  likes,
  location,
  postImage,
  profileImage,
  bookmarks,
  comments,
}: UserPostProps) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeaderContainer}>
        <View>
          <UserProfileImage
            profileImage={profileImage}
            imageDimension={horizontalScale(43)}
          />
        </View>
        <View style={styles.detailsCol}>
          <Text style={styles.username}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.location}>{`${location}`}</Text>
        </View>
        {/* <View style={styles.elipseContainer}> */}
        {/* </View> */}
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869F"
          size={scaleFontSize(24)}
        />
      </View>

      {/* Post Image */}
      <View style={styles.postImage}>
        <Image source={postImage} alt="A Post" />
      </View>
      <View style={styles.postFooter}>
        <IconButton icon={faHeart} color={'#79869F'} label={likes} />
        <IconButton icon={faMessage} color={'#79869F'} label={comments} />
        <IconButton icon={faBookmark} color={'#79869F'} label={bookmarks} />
      </View>
    </View>
  );
};

export default UserPost;

const styles = StyleSheet.create({
  postContainer: {
    // marginBottom: verticalScale(20),
    marginTop: verticalScale(16),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  postHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsCol: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
    flex: 2,
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    letterSpacing: 0.16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(14),
    letterSpacing: 0.12,
    marginTop: verticalScale(5),
  },
  elipseContainer: {},
  postImage: {
    alignItems: 'center',
    marginTop: verticalScale(20),
    // ...GlobalStyles.borderTest,
  },
  postFooter: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(20),
    flexDirection: 'row',
  },
});
