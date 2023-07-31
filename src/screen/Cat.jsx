import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getCatsFetch} from '../redux/features/cat/catSlice';

const Cart = () => {
  const dispatch = useDispatch();

  const {cats} = useSelector(state => state.cats);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, []);
  // console.log('cats==>,', cats);
  return (
    <ScrollView>
      <Text style={styles.header}>CAT SPECIES GALLERY </Text>
      <Text style={styles.subHeader}>
        Images of different species of cats. Lots of cats for your viewing
        pleasure{' '}
      </Text>

      {cats.map(item => (
        <View style={styles.listWrap} key={item.id}>
          <View style={styles.listWrap2}>
            <View style={styles.leftBox}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://loremflickr.com/320/240',
                }}
              />
            </View>
            <View style={styles.rightBox}>
              <Text style={styles.title}>{item.name} </Text>
              <Text style={styles.subTitle}>{item.temperament} </Text>
              <Text style={styles.description}>{item.description} </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  header: {
    fontWeight: '700',
    fontSize: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  subHeader: {
    padding: 12,
    fontSize: 12,
    marginVertical: 10,
  },
  listWrap: {
    backgroundColor: 'white',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 2, height: 2},
    elevation: 9,
  },
  listWrap2: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  leftBox: {
    flex: 0.3,
    marginRight: 50,
  },
  rightBox: {
    flex: 0.7,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    color: 'black',
  },
  subTitle: {
    fontSize: 11,
    marginBottom: 8,
    fontWeight: '600',
  },
  description: {
    fontSize: 10,
  },
  image: {
    height: 100,
    width: 120,
    borderRadius: 4,
  },
});
