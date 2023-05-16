import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}
     <View style={styles.container}>
        <Text>Sneha</Text>
      </View>
    </NavigationContainer>
     
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    // marginTop:12,
    
  },
});

export default App;
