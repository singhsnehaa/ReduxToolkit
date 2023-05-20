import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export const HomeDetail = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text onPress={() => navigation.goBack()}> Back to Home Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      flex: 1,
      justifyContent: 'center',
      
    },
  });
  