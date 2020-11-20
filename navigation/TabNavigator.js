import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Icon from 'react-native-ionicons';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline'
                
              } else if (route.name === 'News') {
                iconName = focused ? 'newspaper' : 'newspaper-outline';
              }
            
              // You can return any component that you like here!
              return  <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#5CB85C',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen name="Home" component={MainStackNavigator} />
            <Tab.Screen name="News" component={ContactStackNavigator} />
            <Tab.Screen name="Store" component={ContactStackNavigator} />
            <Tab.Screen name="Contracts" component={ContactStackNavigator} />
            <Tab.Screen name="Markets" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;