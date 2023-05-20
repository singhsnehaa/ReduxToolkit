import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeDetail')}>
       <Text> Go to HomeDetail Screen</Text>
      </TouchableOpacity>
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
