import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import DayOverview from './app/screens/DayOverviewScreen';
import Screen from './app/components/Screen';
import HomeScreen from './app/screens/HomeScreen';
import HomeScreenNavigatorStack from "./app/components/navigators/HomeScreenStackNavigator";
import WeekSettingsScreen from './app/screens/WeekSettingsScreen';

export default function App() {
  return (
    	<NavigationContainer>
        <HomeScreenNavigatorStack/>
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
