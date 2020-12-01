import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Login from '../screens/Authentication/LoginScreen';
import SignUp from '../screens/Authentication/SignUp';
//import Login from '../screens/Authentication/Login';
import Friends from '../screens/Friends';
import CreateFriends from '../screens/CreateFriends';

import ForgotPassword from '../screens/Authentication/ForgotPassword';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator mode={'model'} screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        {/* <AuthStack.Screen name="Friends" component={Friends} />
        <AuthStack.Screen name="CreateFriends" component={CreateFriends} /> */}
        {/* <AuthStack.Screen name={'Login'} component={Login} /> */}
        {/* <AuthStack.Screen name={'Forgot Password'} component={ForgotPassword} /> */}
      </AuthStack.Navigator>
      {/*<Stack.Navigator headerMode="none">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',

              headerStyle: {
                backgroundColor: 'green',
                elevation: 0,
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>*/}
    </>
  );
};

export default AuthStackNavigator;
