import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getSettings } from '../services/settingsService';
import NutritionDetails from './NutritionDetails';


export default function NutritionOverview({data, workoutType}) {
    const [totalGrams, setTotalGrams] = useState();
    const [requiredProtein, setRequiredProtein] = useState(null)

    const handleProteinSetter = async () => {
        let gramsTotal = data.reduce((total, currentVal) => {
            return total + currentVal.grams;
        }, 0)
        const settings = await getSettings();
        const {protMultiplier, weight} = settings;
        setRequiredProtein(Math.round(weight * protMultiplier[workoutType].value))
        setTotalGrams(gramsTotal);
    }

    useEffect(() => {
        handleProteinSetter();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={[styles.incomeText, totalGrams < requiredProtein ? styles.insufficientProtein : styles.sufficientProtein]}>Protein income: {totalGrams}{requiredProtein && `/${requiredProtein}`}g</Text>
            {data.map(n => <NutritionDetails key={n.title} data={n}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10,
        alignItems: "center"
    },
    incomeText: {
        fontWeight: "600",
        fontSize: 20,
        marginBottom: 10
    },
    insufficientProtein: {
        color: "red"
    },
    sufficientProtein: {
        color: "green"
    },
});