import React from 'react';
import {StyleSheet} from 'react-native';
import RootNavigator from './src/navigator/RootNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <RootNavigator />
      </Provider>
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
