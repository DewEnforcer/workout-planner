import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewNutrition from '../components/nutrition/NewNutrition';
import Screen from '../components/Screen';

export default function NewNutritionScreen({navigation}) {
    const handleNewNutrition = (data) => {
        console.log("Submit", data);
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