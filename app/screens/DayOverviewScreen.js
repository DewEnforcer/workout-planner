import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import DateDisplay from '../components/DateDisplay'
import NutritionOverview from '../components/nutrition/NutritionOverview'
import Screen from '../components/Screen'
import WorkoutPreview from '../components/workout/WorkoutPreview'

import { createCurrentDateKey, getAllPlans } from '../components/services/dayService'

export default class DayOverview extends Component {
    state = {
        workout: null,
        nutrition: null,
        dateKey: null
    }

    async componentDidMount() {
        const dateKey = createCurrentDateKey();
        const data = await getAllPlans();
        if (!data[dateKey]) return;

        const newState = {...this.state}
        newState.workout = data[dateKey].workout_tmp;
        newState.nutrition = data[dateKey].nutrition_tmp
        newState.dateKey = dateKey;

        this.setState(newState);
    }

    render() {
        const {workout, nutrition} = this.state;

        return (
            <Screen>
                <View style={styles.container}>
                    <DateDisplay/>
                    {!workout && !nutrition && <Text>You have no plans for this day</Text>} 
                    {workout !== null && <WorkoutPreview workout={workout} dateKey={this.state.dateKey}/>}
                    {nutrition !== null && <NutritionOverview data={nutrition.nutritions} workoutType={workout.workout_typeId}/>}
                </View>
            </Screen>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
});