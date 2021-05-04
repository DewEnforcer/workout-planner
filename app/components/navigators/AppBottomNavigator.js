import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import routes from './routes';
import HomeScreenNavigatorStack from './HomeScreenStackNavigator';
import SettingsScreen from '../../screens/SettingsScreen';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppBottomNavigator ( ) {
    return (
        <Tab.Navigator initialRouteName={routes.HOME}>
            <Tab.Screen name={routes.HOME} options={{tabBarLabel: "Home", tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>}} component={HomeScreenNavigatorStack}/>
            <Tab.Screen name={routes.SETTINGS} options={{tabBarLabel: "Settings", tabBarIcon: ({color, size}) => <MaterialIcons name="settings" color={color} size={size}/>}} component={SettingsScreen}/>
        </Tab.Navigator>
    )
}