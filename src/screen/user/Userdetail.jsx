import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

const UserDetail = ()=>{
    return (
        <View style={styles.container}>
            <Text>
                UserDetail Screen
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
  
export default UserDetail;