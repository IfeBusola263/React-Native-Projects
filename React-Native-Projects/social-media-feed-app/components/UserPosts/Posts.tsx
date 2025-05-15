import {FlatList, StyleSheet, View} from 'react-native';
import {
  horizontalScale,
  pagination,
  upLoadedPosts,
  verticalScale,
  type UserPost as UserPostProps,
} from '../../utils/helpers';
import UserPost from '.';
import Header from '../header/Header';
import usePaginateData from '../../hooks/usePaginateDate';

const renderItem = ({item}: {item: UserPostProps}) => <UserPost {...item} />;
const ITEMS_PER_PAGE = 2;

export const Posts = () => {
  const {
    uiData,
    isLoading,
    currentPage,
    setCurrentPage,
    setUiData,
    setIsLoading,
  } = usePaginateData(upLoadedPosts, ITEMS_PER_PAGE);

  return (
    <View style={styles.postsContainer}>
      <FlatList
        ListHeaderComponent={<Header />}
        data={uiData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!isLoading) {
            setIsLoading(true);
            const fetchedData = pagination(
              upLoadedPosts,
              ITEMS_PER_PAGE,
              currentPage,
            );
            setUiData(prevData => [...prevData, ...fetchedData]);
            setCurrentPage(currentPage + 1);
            setIsLoading(false);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(4),
  },
});
