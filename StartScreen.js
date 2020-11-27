import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {MainStackNavigator} from './navigation/StackNavigator';

import DrawerNavigator from './navigation/DrawerNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';

const StartScreen = () => {
  const id = useSelector((state) => state.login.id);
  const f_name = useSelector((state) => state.login.first_name);
  const email = useSelector((state) => state.login.email);
  console.log('StartScreen id', id);
  console.log('StartScreen f_name', f_name);
  console.log('StartScreen email', email);

  return (
    <>
      <NavigationContainer>
        {id == null ? <AuthStackNavigator /> : <DrawerNavigator />}
        {/* {id == null ? <AuthStackNavigator /> : <MainStackNavigator />} */}
      </NavigationContainer>
    </>
  );
};
export default StartScreen;
