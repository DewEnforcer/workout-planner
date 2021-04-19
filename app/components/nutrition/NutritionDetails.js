import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NutritionDetails({data}) {
    const {timeStr, title, grams} = data;
    return (
        <View style={styles.container}>
            <Text>{timeStr}</Text>
            <Text>{title} {grams}g</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});