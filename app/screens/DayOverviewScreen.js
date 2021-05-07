import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DateDisplay from '../components/DateDisplay'
import NutritionOverview from '../components/nutrition/NutritionOverview'
import Screen from '../components/Screen'
import { createCurrentDateKey, getAllPlans } from '../components/services/dayService'
import WorkoutPreview from '../components/workout/WorkoutPreview'

export default class DayOverview extends Component {
    state = {
        workout: null,
        nutrition: null,
        dateKey: null
    }

    async componentDidMount() {
        const dateKey = createCurrentDateKey();
        const data = await getAllPlans();
        const newState = {...this.state}
        newState.workout = data[dateKey].workout_tmp;
        newState.nutrition = data[dateKey].nutrition_tmp
        newState.dateKey = dateKey;

        this.setState(newState);
    }

    render() {
        return (
            <Screen>
                <View style={styles.container}>
                    <DateDisplay/>
                    {this.state.workout !== null && <WorkoutPreview workout={this.state.workout} dateKey={this.state.dateKey}/>}
                    {this.state.nutrition !== null && <NutritionOverview data={this.state.nutrition.nutritions} workoutType={this.state.workout.workout_typeId}/>}
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