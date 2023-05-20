import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

export const Profile = ()=>{
    return (
        <View style={styles.container}>
            <Text>
                Profile Screen
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
  