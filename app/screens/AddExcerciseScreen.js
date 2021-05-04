import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import NewExcercise from '../components/workout/NewExcercise';

export default function AddExcerciseScreen({navigation}) {
    const handleNewExc = (data) => {
        console.log("Submit", data);
        navigation.goBack();
    }

    return (
        <Screen>
            <NewExcercise onSubmit={handleNewExc}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
container: {

},
});