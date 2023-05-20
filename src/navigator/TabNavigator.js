import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackFn,ExploreStackFn,ConnectStackFn } from './StackNavigator';

const Tab = createBottomTabNavigator();
const navOptions = {
    headerShown: false,
  };
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navOptions}>
      <Tab.Screen name="HomeScreen" component={HomeStackFn} />
      <Tab.Screen name="ExploreScreen" component={ExploreStackFn} />
      <Tab.Screen name="ConnectScreen" component={ConnectStackFn} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
