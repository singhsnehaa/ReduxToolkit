import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {singleUser,updateUser} from '../../redux/features/user/userSlice';

const UserDetail = props => {
  const userId = props.route.params.userId;
  const [fields, setFields] = useState({
    firstName: '',
    phone: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {userDetailsResponce} = useSelector(state => state.user);
  // console.log('userDetailsResponce=>', userDetailsResponce);

  useEffect(() => {
    dispatch(singleUser(userId));
  }, []);

  useEffect(() => {
    if (userDetailsResponce && Object.keys(userDetailsResponce).length > 0) {
      setFields({
        firstName: userDetailsResponce.firstName,
        phone: userDetailsResponce.phone,
        email: userDetailsResponce.email,
        password: userDetailsResponce.password,
      });
    }
  }, [userDetailsResponce]);

  const updateHandler = ()=>{
    const body={
      firstName: fields.firstName,
      phone: fields.phone,
      email: fields.email,
      password: fields.password,
    }
    dispatch(updateUser({userId, body}));
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput
        value={fields.firstName}
        placeholder="Enter first Name"
        onChangeText={v => setFields({...fields, firstName: v})}
        style={styles.input}
      />

      <TextInput
        value={fields.phone}
        placeholder="Enter Mobile No"
        onChangeText={v => setFields({...fields, phone: v})}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        value={fields.email}
        placeholder="Enter Gmail"
        onChangeText={v => setFields({...fields, email: v})}
        style={styles.input}
      />

      <TextInput
        value={fields.password}
        placeholder="Password"
        onChangeText={v => setFields({...fields, password: v})}
        style={styles.input}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.cbtnCntainer}
        onPress={() => updateHandler()}>
        <Text style={styles.buttonText}>{'Update'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cbtnCntainer: {
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 48 / 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default UserDetail;
