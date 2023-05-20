import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export const Explore = ()=>{
    return (
        <View style={styles.container}>
            <Text>
                Explore Screen
            </Text>
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
  