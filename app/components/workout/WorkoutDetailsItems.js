import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutDetailsItems({label}) {
return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        width: "70%",
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: "center"
    }
});