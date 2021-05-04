import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import defaultStyles from "../../config/styles";

export default function ItemInput({icon, label, id, onPress, onDelete}) {
    const {values, setValues} = useFormikContext();

    const handleOnPress = () => {
        if (onPress) return onPress();
        onDelete(values, setValues, id);
    }

    return (
        <TouchableOpacity style={{width: "100%"}} onPress={handleOnPress}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons
                    size={25}
                    name={icon}
                />}
                <Text>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: defaultStyles.colors.light,
      borderRadius: 25,
      flexDirection: "row",
      padding: 15,
      marginVertical: 10,
      width: "100%",
      justifyContent: "center"
    },
  });