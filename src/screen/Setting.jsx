import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export const Setting = ()=>{
    return (
        <View style={styles.container}>
            <Text>
                Setting Screen
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
  