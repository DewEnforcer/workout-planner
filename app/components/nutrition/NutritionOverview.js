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
            <Text>Protein income: {totalGrams}{requiredProtein && `/${requiredProtein}`}g</Text>
            {data.map(n => <NutritionDetails data={n}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});