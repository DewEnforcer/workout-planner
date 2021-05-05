import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewNutrition from '../components/nutrition/NewNutrition';
import NutritionPlan from '../components/nutrition/NutritionPlan';
import Screen from '../components/Screen';
import { addNutritionPlan } from '../components/services/nutritionPlanService';
import { addNutrition } from '../components/services/nutritionsService';

import defaultStyles from "../config/styles";

export default function AddNutritionsScreen() {

    const handleNutritionAdd = async data => {
        await addNutritionPlan(data);
    }

    return (
        <Screen>
            <Text style={defaultStyles.headerText}>Nutritions</Text>
            <NutritionPlan onSubmit={handleNutritionAdd}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    title: {

    },  
container: {

},
});