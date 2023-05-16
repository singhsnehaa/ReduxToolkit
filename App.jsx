import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';

const App = () => {
  return (
    <>
      <RootNavigator />
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
