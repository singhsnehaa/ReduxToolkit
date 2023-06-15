import React, {useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import {AuthContext} from '../context/AuthContext'

export const Signin = () => {
  const [pin, setPin] = useState('');

  const { login } = useContext(AuthContext);
  console.log('ppin=>', pin);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Signin Screen</Text>

      <TextInput
        value={pin}
        placeholder="Enter Pin No"
        onChangeText={setPin}
        maxLength={4}
        style={{borderWidth:1,marginVertical:24,}}
      />

      <Button onPress={() => login({pin})} title={'Login'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:18,
    marginVertical:24
  },
});
