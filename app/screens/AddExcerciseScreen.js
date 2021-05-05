import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { addExcercise } from '../components/services/excerciseService';
import NewExcercise from '../components/workout/NewExcercise';

export default function AddExcerciseScreen({navigation, route}) {
    const handleNewExc = async (data) => {
        await addExcercise(data);
        await route.params.onReturn();
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