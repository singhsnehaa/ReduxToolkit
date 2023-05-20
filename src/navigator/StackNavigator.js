import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, HomeDetail,Explore,Connect } from '../screen';

const navOptions = {
  headerShown: false,
};

const HomeStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const ConnectStack = createNativeStackNavigator();

const HomeStackFn = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={navOptions} />
      <HomeStack.Screen name="HomeDetail" component={HomeDetail} />
    </HomeStack.Navigator>
  );
};
const ExploreStackFn = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={Explore} options={navOptions}/>
      {/* <Stack.Screen name="HomeDetail" component={HomeDetail} /> */}
    </ExploreStack.Navigator>
  );
};
const ConnectStackFn = () => {
  return (
    <ConnectStack.Navigator>
      <ConnectStack.Screen name="Connect" component={Connect} options={navOptions} />
      {/* <ConnectStack.Screen name="HomeDetail" component={HomeDetail} /> */}
    </ConnectStack.Navigator>
  );
};

export { HomeStackFn,ExploreStackFn,ConnectStackFn};
