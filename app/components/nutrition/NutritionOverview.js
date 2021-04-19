import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NutritionDetails from './NutritionDetails';


export default function NutritionOverview({data, requiredProtein = 170}) {
    const [totalGrams, setTotalGrams] = useState();

    useEffect(() => {
        let gramsTotal = data.reduce((total, currentVal) => {
            return total + currentVal.grams;
        }, 0)
        setTotalGrams(gramsTotal);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.incomeText}>Protein income: {totalGrams}{requiredProtein && `/${requiredProtein}`}g</Text>
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
    }
});