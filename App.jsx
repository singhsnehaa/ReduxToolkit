import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/features/store'

const App = () => {
  console.log('hhhiii')
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Sneha</Text>
      </View>
    </Provider>
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
