import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import defaultStyles from "../../config/styles";

export default function ListEmptyComponent() {
return (
    <View style={styles.container}>
        <Text style={defaultStyles.headerText}>No options available:(</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {

},
});