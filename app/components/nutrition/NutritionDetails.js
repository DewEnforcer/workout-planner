import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NutritionDetails({data}) {
    const {timeStr, title, grams} = data;
    return (
        <View style={styles.container}>
            <Text style={styles.timeText}>{timeStr}</Text>
            <Text style={styles.nutritionText}>{title} {grams}g</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        width: "70%",
        alignItems: "flex-start",
        borderBottomWidth: 1,
    },
    timeText: {
        fontSize: 18,
    },
    nutritionText: {
        fontSize: 14,
        fontWeight: "800"
    }
});