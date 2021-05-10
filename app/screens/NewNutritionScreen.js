import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NewNutrition from '../components/nutrition/NewNutrition';
import Screen from '../components/Screen';
import { addNutrition } from '../components/services/nutritionsService';

export default function NewNutritionScreen({navigation, route}) {
    const handleNewNutrition = async (data) => {
        await addNutrition(data);
        await route.params.onReturn();
        navigation.goBack();
    }

    return (
        <Screen>
            <NewNutrition onSubmit={handleNewNutrition}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
container: {

},
});