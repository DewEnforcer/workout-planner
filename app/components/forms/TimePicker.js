import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from "formik";

import { TimePicker } from 'react-native-simple-time-picker';
import { timeFormatter } from '../../utils/dateUtils';

export default function AppTimePicker({name}) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const { errors, setFieldValue, touched, values } = useFormikContext();

    const handleTimeChange = ({hours: newHours, minutes: newMinutes}) => {
        if (hours !== newHours) setHours(newHours);
        if (minutes !== newMinutes) setMinutes(newMinutes);

        setFieldValue(name, timeFormatter(newHours, newMinutes));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter time: </Text>
            <TimePicker
                value={{
                    hours,
                    minutes
                }}
                onChange={handleTimeChange}
                zeroPadding
                hoursUnit="H"
                minutesUnit="M"
            />
        </View>
    );
}  

const styles = StyleSheet.create({
    label: {
        marginLeft: 5,
        fontSize: 16
    }
});