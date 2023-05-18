import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList, deleteUser} from '../../redux/features/user/userSlice';

const UserList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {userResponce} = useSelector(state => state.user);
  // console.log('user=>', user);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  const deleteHandler = userId => {
    dispatch(deleteUser(userId));
  };

  const UserContainer = ({item}) => {
    return (
      <View style={styles.userCardWrap}>
        <View style={styles.leftItem}>
          <Image
            source={{uri: item.image}}
            resizeMode="cover"
            style={styles.userImg}
          />
          <Text style={styles.userWithText}>{item.gender}</Text>
        </View>

        <View style={styles.rightItem}>
          <View style={styles.handlerWrap}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('UserDetail', {userId: item.id})
              }>
              <Text style={styles.handlerText}>{'Edit'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteHandler(item.id)}>
              <Text style={{...styles.handlerText, marginHorizontal: 10}}>
                {'Delete'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.userDemoInfoWrap]}>
            <Text style={styles.userName}>
              {item.firstName} {item.lastName}
            </Text>
            <View style={styles.demographWrap}>
              <View style={styles.infoItemWrp}>
                <Text style={styles.infoItem}>{item.email}</Text>
              </View>
              <View style={styles.infoItemWrp}>
                <Text style={styles.infoItem}>{item.phone}</Text>
              </View>
            </View>
          </View>
          <View style={styles.locationWrap}>
            <Text style={styles.infoItem}>
              Location: {item.address.city}, {item.address.address},
              {item.address.state}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={userResponce}
          keyExtractor={item => item.id}
          renderItem={({item}) => <UserContainer item={item} />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 24,
    // marginBottom: 24,
  },

  userCardWrap: {
    marginBottom: 18,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  leftItem: {
    flex: 0.3,
    alignItems: 'center',
    paddingVertical: 10,
  },
  rightItem: {
    flex: 0.7,
    paddingBottom: 6,
  },
  userImg: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    borderWidth: 1,
  },
  userWithText: {
    marginVertical: 6,
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: 'blue',
    textTransform: 'capitalize',
  },

  handlerWrap: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  handlerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    color: 'black',
  },
  userDemoInfoWrap: {
    paddingRight: 10,
  },
  userName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: 'purple',
  },
  demographWrap: {
    paddingRight: 5,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoItemWrp: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoItem: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: 'black',
    marginLeft: 4,
  },
  locationWrap: {
    marginVertical: 14,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default UserList;
