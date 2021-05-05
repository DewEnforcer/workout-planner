import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/Screen';
import { addWorkout } from '../components/services/workoutService';
import NewWorkout from '../components/workout/NewWorkout';
import defaultStyles from "../config/styles";

export default function AddWorkoutScreen() {

    const handleNewWorkout = async data => {
        await addWorkout(data);
    }

    return (
        <Screen>
            <Text style={defaultStyles.headerText}>Workouts</Text>
            <NewWorkout onSubmit={handleNewWorkout}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
container: {

},
});