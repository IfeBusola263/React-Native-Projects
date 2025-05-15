import {RootStackParamList} from '../utils/types';
import {RootTopTabParamList} from './TopTabNavigation';

type RouteStackKeys = {
  home: string;
  profile: string;
};

type TopTabRouteKeys = {
  photo: string;
  video: string;
  saved: string;
};

export const Routes: Record<keyof RouteStackKeys, keyof RootStackParamList> = {
  home: 'Home',
  profile: 'Profile',
};

export const TopTabRoutes: Record<
  keyof TopTabRouteKeys,
  keyof RootTopTabParamList
> = {
  photo: 'Photos',
  video: 'Vidoes',
  saved: 'Saved',
};
