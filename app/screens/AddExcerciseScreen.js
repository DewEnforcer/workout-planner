import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import NewExcercise from '../components/workout/NewExcercise';

import { addExcercise } from '../components/services/excerciseService';

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