import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';
import AuthProvider from './src/context/AuthContext';
import { navigationRef } from './src/navigator/RootNavigator';

const App = () => {
  // console.log('navigationRef=>',navigationRef)
  return (
    <>
      <AuthProvider>
        <TouchableOpacity
          onPress={() => navigationRef.current?.navigate('HomeDetail')}
        >
          <Text> Go to Home details</Text>
        </TouchableOpacity>
        <RootNavigator />
      </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
