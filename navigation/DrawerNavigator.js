import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../Components/DrawerContent';
import {ContactStackNavigator} from './StackNavigator';
import TabNavigator from './TabNavigator';
import Home from '../screens/Home';
import SignUp from '../screens/Authentication/SignUp';
import Friends from '../screens/Friends';
import CreateFriends from '../screens/CreateFriends';
import AddEditFriend from '../screens/AddEditFriend';

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
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#2C3790',
      }}
      screenOptions={{headerShown: false}}
      drawerContentOptions={{
        activeTintColor: '#FFFFFF',
        itemStyle: {marginVertical: 5},
        labelStyle: {fontSize: 15, marginLeft: 10, color: 'white'},
      }}
      /* drawerContent={(props) => <DrawerContent {...props} />} */
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="CreateFriends" component={CreateFriends} />
      <Drawer.Screen name="AddEditFriend" component={AddEditFriend} />
      <Drawer.Screen name="Profile" component={ContactStackNavigator} />
      <Drawer.Screen name="Wallet" component={ContactStackNavigator} />
      <Drawer.Screen name="Settings" component={ContactStackNavigator} />
      <Drawer.Screen name="Notifications" component={ContactStackNavigator} />
      <Drawer.Screen name="logout" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
