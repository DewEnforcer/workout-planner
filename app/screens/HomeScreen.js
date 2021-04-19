import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/NavButton';
import Screen from '../components/Screen';

export default function HomeScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <NavButton style={styles.navBtns} title="Todays overview"/>
                <NavButton style={styles.navBtns} title="Calender"/>
                <NavButton style={styles.navBtns} title="Add nutritions"/>
                <NavButton style={styles.navBtns} title="Add workout"/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        justifyContent: "space-evenly"
    },
    navBtns: {
        height: "24%",
    }
});