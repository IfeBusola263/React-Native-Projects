import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {UserStory} from '../UserStories';
import userStories, {
  getFontFamily,
  horizontalScale,
  pagination,
  scaleFontSize,
  verticalScale,
  type UserStory as Story,
} from '../../utils/helpers';
import usePaginateData from '../../hooks/usePaginateDate';
import {useNavigation} from '@react-navigation/native';
import {ProfileScreenProp} from '../../screens/profile/Profile';
import {Routes} from '../../navigation/routes';
import {MainStackNavigationProp} from '../../utils/types';

const renderItem = ({item}: {item: Story}) => (
  <UserStory firstName={item.firstName} profileImage={item.profileImage} />
);

const ITEMS_PER_PAGE = 4;

const Header = () => {
  const {
    uiData,
    isLoading,
    currentPage,
    setCurrentPage,
    setIsLoading,
    setUiData,
  } = usePaginateData(userStories, ITEMS_PER_PAGE);

  const navigation =
    useNavigation<MainStackNavigationProp<typeof Routes.profile>>();
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Title text="Let's Explore" />
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.profile)}
          style={styles.messageIconContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#898DAE"
            size={scaleFontSize(20)}
          />
          <View style={styles.notificationConatiner}>
            <Text style={styles.number}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* User Stories */}
      <View style={styles.storiesContainer}>
        <FlatList
          data={uiData}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (!isLoading) {
              setIsLoading(true);
              const fetchedData = pagination(
                userStories,
                ITEMS_PER_PAGE,
                currentPage,
              ) as Story[];
              setUiData(prevData => [...prevData, ...fetchedData]);
              setCurrentPage(currentPage + 1);
              setIsLoading(false);
            }
          }}
        />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: horizontalScale(24),
    marginRight: horizontalScale(17),
    marginVertical: verticalScale(16),
  },
  messageIconContainer: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: '50%',
    // ...GlobalStyles.borderTest,
  },
  notificationConatiner: {
    backgroundColor: '#F35BAC',
    borderRadius: '50%',
    width: horizontalScale(10),
    height: horizontalScale(10),
    justifyContent: 'center',
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
    // ...GlobalStyles.borderTest,
  },
  number: {
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
    color: '#fff',
    textAlign: 'center',
  },
  storiesContainer: {
    marginBottom: verticalScale(20),
  },
});
