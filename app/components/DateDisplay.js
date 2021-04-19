import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {timeConverter} from "../utils/dateUtils";

export default function DateDisplay({tmstp = null}) {
    const [dateStr, setDateStr] = useState("00:00");

    useEffect(() => {
        if (!tmstp) return setDateStr(timeConverter(Date.now()));

        setDateStr(timeConverter(tmstp));
    }, [])

    return (
        <View style={styles.container}>
            <Text>{dateStr}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});