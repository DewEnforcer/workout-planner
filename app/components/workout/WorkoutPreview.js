import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutPreview({title}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.text]}>Todays workout</Text>
            <Text style={[styles.subTitle, styles.text]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10
    },
    text: {
        textAlign: "center"
    },
    title: {
        fontSize: 20,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "600"
    }
});