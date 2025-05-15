import {ImageSourcePropType, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

export const getFontFamily = (baseFont = 'Inter', weight = '400') => {
  const isIOS = Platform.OS === 'ios';

  //  Map weights to PostScript names for iOS (check Font Book for *actual* names)
  const iosFontNames: Record<string, string> = {
    '100': 'Inter28pt-Thin',
    '200': 'Inter28pt-ExtraLight',
    '300': 'Inter28pt-Light',
    '400': 'Inter28pt-Regular',
    '500': 'Inter28pt-Medium',
    '600': 'Inter28pt-SemiBold',
    '700': 'Inter28pt-Bold',
    '800': 'Inter28pt-ExtraBold',
    '900': 'Inter28pt-Black',
    normal: 'Inter28pt-Regular',
    bold: 'Inter28pt-Bold',
  };

  if (isIOS) {
    return iosFontNames[weight] || 'Inter-Regular_Bold'; // Default to Regular if weight is not found
  } else {
    const suffix = '_28pt';
    switch (weight) {
      case '100':
        return `${baseFont}${suffix}-Thin`;
      case '200':
        return `${baseFont}${suffix}-ExtraLight`;
      case '300':
        return `${baseFont}${suffix}-Light`;
      case 'normal':
      case '400':
        return `${baseFont}${suffix}-Regular`;
      case '500':
        return `${baseFont}${suffix}-Medium`;
      case '600':
        return `${baseFont}${suffix}-SemiBold`;
      case 'bold':
      case '700':
        return `${baseFont}${suffix}-Bold`;
      case '800':
        return `${baseFont}${suffix}-ExtraBold`;
      case '900':
        return `${baseFont}${suffix}-Black`;
      default:
        return `${baseFont}${suffix}-Regular`;
    }
  }
};

export type UserStory = {
  id: string;
  firstName: string;
  profileImage: ImageSourcePropType;
};

export const userStories: UserStory[] = [];
for (let i = 1; i <= 2000; i++) {
  userStories.push({
    id: i.toString(),
    firstName: `User${i}`,
    profileImage: require('../assets/images/default_profile.png'),
  });
}

export default userStories;

export type UserPost = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number | string;
  comments: number | string;
  bookmarks: number | string;
  id: number | string;
  postImage: ImageSourcePropType;
  profileImage: ImageSourcePropType;
};

export const upLoadedPosts: UserPost[] = [];

for (let i = 1; i <= 20; i++) {
  upLoadedPosts.push({
    id: i.toString(),
    firstName: `User${i}`,
    lastName: `lastName${i}`,
    location: 'Some Location',
    likes: Math.floor(Math.random() * 300007654),
    comments: Math.floor(Math.random() * 28498765),
    bookmarks: Math.floor(Math.random() * 600987),
    postImage: require('../assets/images/default_post.png'),
    profileImage: require('../assets/images/default_profile.png'),
  });
}

export const pagination = <T>(
  database: T[],
  pageSize: number,
  currPage: number,
) => {
  const startIndex = (currPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Return empty list if starting index is the same as the length of the db
  if (startIndex >= database.length) return [];

  return database.slice(startIndex, endIndex);
};

const {width, height} = Dimensions.get('window');

// 375 is for screens sizes of iphone 6, 7 and 8
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = (size: number) => {
  return (width / guidelineBaseWidth()) * size;
};

// This is based on 5inch mobile screen size.
const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = (size: number) => {
  return (height / guidelineBaseHeight()) * size;
};

const guidelineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = (size: number) => {
  return Math.round((width / guidelineBaseFont()) * size);
};

export {horizontalScale, verticalScale, scaleFontSize};
