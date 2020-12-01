import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Contact from '../screens/Contact';
import SignUp from '../screens/Authentication/SignUp';
import Friends from '../screens/Friends';
import CreateFriends from '../screens/CreateFriends';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Friends" component={Friends} />
      <Stack.Screen name="CreateFriends" component={CreateFriends} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

/* const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#2C3790',
      }}
      screenOptions={{headerShown: false}}
      drawerContentOptions={{
        activeTintColor: '#FFFFFF',
        itemStyle: {marginVertical: 5},
        labelStyle: {fontSize: 15, marginLeft: 10, color: 'white'},
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Friends" component={Friends} />
      <Drawer.Screen name="CreateFriends" component={CreateFriends} />
      <Drawer.Screen name="Profile" component={ContactStackNavigator} />
      <Drawer.Screen name="Wallet" component={ContactStackNavigator} />
      <Drawer.Screen name="Settings" component={ContactStackNavigator} />
      <Drawer.Screen name="Notifications" component={ContactStackNavigator} />
      <Drawer.Screen name="logout" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}; */

export {MainStackNavigator, ContactStackNavigator};
