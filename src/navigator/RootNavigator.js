import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import TabNavigator from './TabNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      {/* <StackNavigator /> */}
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default RootNavigator;
