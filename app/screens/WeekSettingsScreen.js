import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import DaySetter from '../components/week/DaySetter';

export default function WeekSettingsScreen() {
return (
    <Screen>
        <View style={styles.container}>
            <Text>Hello world</Text>
            <DaySetter/>
        </View>
    </Screen>
);
}

const styles = StyleSheet.create({
container: {

},
});