import React, { useContext } from 'react';

import { View, Text, StyleSheet } from 'react-native';

export const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
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
