import React, { useContext } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import { Profile, Setting, Signin, Signup, Splash } from '../screen';
import { AuthContext } from '../context/AuthContext';

const AppStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
export const navigationRef = React.createRef();

const navOptions = {
  headerShown: false,
};
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator options={navOptions}>
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={navOptions}
        name="MainDrawer"
        component={DrawerNavigator}
      />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Setting" component={Setting} />
    </AppStack.Navigator>
  );
};

const RootNavigator = () => {
 

  const { user } = useContext(AuthContext);
  console.log('user==>', user);
  return (
    <NavigationContainer ref={navigationRef}>

      {user === null ? <AuthNavigation />:<AppNavigation /> }
      {/* {user !== null ? <AppNavigation />:<AuthNavigation /> } */}
     
    </NavigationContainer>
  );
};

export default RootNavigator;
