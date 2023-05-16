import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
