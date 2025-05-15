import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopTabRoutes} from './routes';
import Photos from '../screens/profile/tabScreens/Photos';
import Videos from '../screens/profile/tabScreens/Vidoes';
import Saved from '../screens/profile/tabScreens/Saved';
import ProfileTabTitle from '../components/Title/ProfileTabTitile';

export type RootTopTabParamList = {
  Photos: undefined;
  Vidoes: undefined;
  Saved: undefined;
};

const TopTab = createMaterialTopTabNavigator<RootTopTabParamList>();

const TopTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0.2,
          // zIndex: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <TopTab.Screen
        name={TopTabRoutes.photo}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={TopTabRoutes.photo} isFocused={focused} />
          ),
        }}
        component={Photos}
      />
      <TopTab.Screen
        name={TopTabRoutes.video}
        component={Videos}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={TopTabRoutes.video} isFocused={focused} />
          ),
        }}
      />
      <TopTab.Screen
        name={TopTabRoutes.saved}
        component={Saved}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={TopTabRoutes.saved} isFocused={focused} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;
