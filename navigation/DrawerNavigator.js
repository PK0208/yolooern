import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from '../Components/DrawerContent'
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props => <DrawerContent {...props} />}  >
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;