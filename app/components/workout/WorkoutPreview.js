import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutPreview({title}) {
    return (
        <View style={styles.container}>
            <Text>Workout for today</Text>
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});