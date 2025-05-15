import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../utils/types';
import {Routes} from '../../navigation/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  getFontFamily,
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/helpers';
import UserProfileDetails from '../../components/UserProfile/UserProfileDetails';
import {GlobalStyles} from '../../utils/Styles';
import TopTabNavigation from '../../navigation/TopTabNavigation';

type ScreenName = typeof Routes.profile;

export type ProfileScreenProp = NativeStackScreenProps<
  RootStackParamList,
  ScreenName
>;

// 0150EC
const Profile = ({navigation, route}: ProfileScreenProp) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        {/* <Pressable onPress={() => navigation.navigate(Routes.profile)} /> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/default_profile.png')}
          />
        </View>
        <Text style={styles.username}>Light Ogunbayo Titobiloluwa</Text>

        {/* Details */}
        <View style={styles.detailsContainer}>
          <UserProfileDetails title="45" label="following" />
          <UserProfileDetails
            title="30M"
            label="followers"
            customStyles={{
              borderRightColor: '#E9EFF1',
              borderLeftColor: '#E9EFF1',
              borderLeftWidth: 1,
              borderRightWidth: 1,
            }}
          />
          <UserProfileDetails title="100" label="Posts" />
        </View>
        <View style={{flex: 1, minHeight: 500}}>
          <TopTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1.4,
    borderColor: 'rgba(1,80,236, 0.5)',
    borderRadius: '50%',
    alignSelf: 'center',
    padding: horizontalScale(5),
    marginTop: verticalScale(32),
  },
  image: {
    width: horizontalScale(100),
    height: horizontalScale(100),
  },
  username: {
    textAlign: 'center',
    marginTop: verticalScale(20),
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(28),
    letterSpacing: scaleFontSize(0.4),
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: horizontalScale(40),
    paddingVertical: horizontalScale(30),
    borderBottomWidth: 1,
    borderBottomColor: '#E9EFF1',
    // ...GlobalStyles.borderTest,
  },
});
