import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DateDisplay from '../components/DateDisplay'
import NutritionOverview from '../components/nutrition/NutritionOverview'
import Screen from '../components/Screen'
import { createCurrentDateKey, getAllPlans } from '../components/services/dayService'
import WorkoutPreview from '../components/workout/WorkoutPreview'

export default class DayOverview extends Component {
    state = {
        workout: {
            title: "Arms day (Extreme)",
            typeId: 2
        },
        nutrition: [
            {timeStr: "8:00", title: "Ovesná kaše s banánem", grams: 13},
            {timeStr: "8:30", title: "Proten shake 40g", grams: 30},
            {timeStr: "12:00", title: "Kuřecí maso s bramborami", grams: 23},
            {timeStr: "15:30", title: "Jogurt s cereáliemi", grams: 7},
            {timeStr: "18:15", title: "4x plátky chleba se šunkou a sýrem", grams: 13},
            {timeStr: "20:15", title: "Arašídy 100g", grams: 24.4},
        ] 
    }

    async componentDidMount() {
        const dateKey = createCurrentDateKey();
        const data = await getAllPlans();
        const newState = {...this.state}
        newState.workout = data[dateKey].workout_tmp;
        newState.nutrition = data[dateKey].nutrition_tmp

        this.setState(newState);
        console.log(this.state.nutrition.nutritions);
    }

    render() {
        return (
            <Screen>
                <View style={styles.container}>
                    <DateDisplay/>
                    <WorkoutPreview title={this.state.workout.label}/>
                    <NutritionOverview data={this.state.nutrition.nutritions} workoutType={this.state.workout.workout_typeId}/>
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