import React, { useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Signin');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
