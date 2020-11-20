import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native';
import {Drawer} from 'native-base';
//import Store from '../assets/images/store.svg';
//import Contracts from '../assets/images/contract.svg'
//import Earth from '../assets/images/airplane-around-earth.svg'
//import Stock from '../assets/images/stock.svg'
//import Bank from '../assets/images/bank.svg'
const DrawerContent = (props) => {
  return (
    <View style={{height: '100%', width: '100%', paddingHorizontal: 20}}>
      <DrawerContentScrollView {...props}>
        
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;
