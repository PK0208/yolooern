import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

//import { MainStackNavigator } from "./navigation/StackNavigator";

import DrawerNavigator from './navigation/DrawerNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';

const StartScreen = () => {
  const id = useSelector((state) => state.login.email);
  console.log('StartScreen', id)

  return (
    <>
      <NavigationContainer>
        {id == null ? <AuthStackNavigator /> : <DrawerNavigator />}
      </NavigationContainer>
    </>
  );
};
export default StartScreen;
