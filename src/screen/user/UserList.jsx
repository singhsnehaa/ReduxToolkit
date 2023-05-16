import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet, Button} from 'react-native';

const UserList = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>UserList Screen</Text>
      <Button
        onPress={() => navigation.navigate('UserDetail')}
        title="navigate User Details screen"
        color="#841584"
      />
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

export default UserList;
