import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import DayOverview from './app/screens/DayOverviewScreen';
import Screen from './app/components/Screen';
import HomeScreen from './app/screens/HomeScreen';
import HomeScreenNavigatorStack from "./app/components/navigators/HomeScreenStackNavigator";
import WeekSettingsScreen from './app/screens/WeekSettingsScreen';
import AppTimePicker from './app/components/forms/TimePicker';
import AppBottomNavigator from './app/components/navigators/AppBottomNavigator';

export default function App() {
  const handleTimeChange = ({minutes: newMinutes, seconds: newSeconds}) => {
    console.log(newMinutes, newSeconds);

    this.setState(newState);
  }


  return (
    	<NavigationContainer>
        <AppBottomNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
