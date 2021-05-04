import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavButton from '../components/NavButton';
import routes from '../components/navigators/routes';
import Screen from '../components/Screen';

export default function HomeScreen({navigation}) {
    return (
        <Screen>
            <View style={styles.container}>
                <NavButton style={styles.navBtns} onPress={() => navigation.navigate(routes.DAY_OVERVIEW)} title="Todays overview"/>
                <NavButton style={styles.navBtns} onPress={() => navigation.navigate(routes.CALENDAR)} title="Calendar"/>
                <NavButton style={styles.navBtns} onPress={() => navigation.navigate(routes.ADD_NUTRITION_PLAN)} title="Add nutritions"/>
                <NavButton style={styles.navBtns} onPress={() => navigation.navigate(routes.ADD_WORKOUT)} title="Add workout"/>
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