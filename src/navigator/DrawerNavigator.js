import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile, Setting } from '../screen';
import TabNavigator from './TabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const navOptions = {
  headerShown: false,
};
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
        navOptions
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />
    }
    >
      <Drawer.Screen name="Main" component={TabNavigator}/>
      {/* <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} /> */}



    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
