import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const getStore = () => {
  console.log('--Get Store detail--');
  const id = useSelector((state) => state.login.id);
  const f_name = useSelector((state) => state.login.first_name);
  const email = useSelector((state) => state.login.email);
  console.log('getStore id', id);
  console.log('getStore f_name', f_name);
  console.log('getStore email', email);
};
