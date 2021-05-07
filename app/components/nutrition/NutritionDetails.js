import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NutritionDetails({data}) {
    const {label, grams} = data;
    return (
        <View style={styles.container}>
            <Text style={styles.nutritionText}>{label} - {grams}g</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        width: "70%",
        borderBottomWidth: 1,
    },
    timeText: {
        fontSize: 18,
    },
    nutritionText: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: "center"
    }
});