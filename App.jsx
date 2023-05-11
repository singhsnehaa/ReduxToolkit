import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App=()=> {
 
  return (
    <View style={styles.container}>
      <Text>Sneha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    flex:1,
    justifyContent:'center'
  },

});

export default App;
