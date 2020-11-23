import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../Components/DrawerContent';
import {ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    /* drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }} */
    /*  <Drawer.Navigator
         drawerContentOptions={{
           activeTintColor: '#e91e63',
           itemStyle: { marginVertical: 5 },
         }}></Drawer.Navigator> */
    /* <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <DrawerContent {...props} />}  > */
    /* <Drawer.Navigator drawerStyle={{
            backgroundColor: '#334CFF',
        }}
            screenOptions={{ headerShown: false }} drawerContentOptions={{
                activeTintColor: '#FFFFFF',
                itemStyle: { marginVertical: 5 },
            }} > */
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
