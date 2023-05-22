import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackFn, ExploreStackFn, ConnectStackFn } from './StackNavigator';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const navOptions = {
  headerShown: false,
};
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navOptions}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeStackFn}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabVisibility(route),
          },
        })}
      />
      <Tab.Screen name="ExploreScreen" component={ExploreStackFn} />
      <Tab.Screen name="ConnectScreen" component={ConnectStackFn} />
    </Tab.Navigator>
  );
};

const getTabVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  // console.log(routeName);
  if (routeName === 'HomeDetail') {
    return 'none';
  }
  return 'flex';
};
export default TabNavigator;
