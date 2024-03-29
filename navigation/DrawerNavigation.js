import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'

import Profile from "../screens/Profile";
import TabNavigator from './TabNavigator'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
       <Drawer.Navigator>
        <Drawer.Screen  name='Perfil' component={Profile}/>
        <Drawer.Screen name='Tela Inicial' component={TabNavigator}/>
       </Drawer.Navigator>
    )
}

export default DrawerNavigator;