import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import { Profile, Setting } from '../screen';

const MainStack = createNativeStackNavigator();
const navOptions = {
  headerShown: false,
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <StackNavigator /> */}
      {/* <TabNavigator/> */}
      {/* <DrawerNavigator/> */}

      <MainStack.Navigator>
        <MainStack.Screen  options={navOptions} name="Main" component={DrawerNavigator} />
        <MainStack.Screen name="Profile" component={Profile} />
        <MainStack.Screen name="Setting" component={Setting} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
