import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import DateDisplay from '../components/DateDisplay'
import NutritionOverview from '../components/nutrition/NutritionOverview'
import WorkoutPreview from '../components/workout/WorkoutPreview'

export default class DayOverview extends Component {
    state = {
        workout: {
            title: "Arms day (Extreme)"
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

    render() {
        return (
            <View style={styles.container}>
                <DateDisplay/>
                <WorkoutPreview title={this.state.workout.title}/>
                <NutritionOverview data={this.state.nutrition}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
});