import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, HomeDetail } from '../screen';

const navOptions = {
  headerShow: false
};

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name="Home" component={Home} options={navOptions} />

      <Stack.Screen
        name="HomeDetail"
        component={HomeDetail}
        options={navOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
