import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/features/store';
import TodoList from './src/screen/TodoList';
import Cat from './src/screen/Cat';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <TodoList /> */}
        <Cat />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    // flex: 1,
    // justifyContent: 'center',
    marginTop: 16,
  },
});

export default App;
