import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserList from '../screen/user/UserList';
import UserDetail from '../screen/user/Userdetail';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="UserList">
      <Stack.Screen
        name="UserList"
        component={UserList}
        // options={{header: () => null}}
      />

      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        // options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
