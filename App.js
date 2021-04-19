import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DayOverview from './app/components/DayOverview';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <DayOverview data={[]}/>
    </Screen>
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
