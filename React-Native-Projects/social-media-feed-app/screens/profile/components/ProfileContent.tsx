import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {horizontalScale, verticalScale} from '../../../utils/helpers';
import {GlobalStyles} from '../../../utils/Styles';

const ProfileContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}
      contentContainerStyle={{
        padding: horizontalScale(8),
      }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/default_post.png')}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: verticalScale(100),
    marginBottom: verticalScale(8),
    // ...GlobalStyles.borderTest,
    // padding: 10,
  },
});
