import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Routes} from './routes';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import {RootStackParamList} from '../utils/types';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.home}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.home} component={Home} />
      <Stack.Screen name={Routes.profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
