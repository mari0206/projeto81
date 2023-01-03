import React from "react";
import {CreateBottomNavigator} from 'react navigation/bottom-tabs'

import Feed from "../screens/Feed";
import CreatePost from '../screens/CreatePost'

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
        screeenOptions={( route ) => ({
tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if(route.name === 'Feed') {
        iconName = focused
        ? 'book'
        : 'book-outline';
    } else if (route.name === 'CreatePost') {
        iconName = focused ? 'create' : 'create-outline'
    }
    return <Ionicons name={iconname} size={size} color={color}/>

},
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='CriarPost' component={CreatePost}/>
            
        </Tab.Navigator>
    )
}


