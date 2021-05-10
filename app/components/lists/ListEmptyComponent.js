import React from 'react';
import { Text, View } from 'react-native';
import defaultStyles from "../../config/styles";

export default function ListEmptyComponent() {
    return (
        <View>
            <Text style={defaultStyles.headerText}>No options available:(</Text>
        </View>
    );
}