import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavButton({title, onPress, style}) {
    return (
        <TouchableOpacity style={{backgroundColor: "dodgerblue", justifyContent: "center"}} onPress={onPress}>
          <View style={[styles.container, style]}>
              {title && <Text style={styles.text}>{title}</Text>}
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        color: "#ffffff"
    }
});