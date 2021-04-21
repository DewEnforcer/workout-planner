import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import AppButton from "../AppButton";

export default function WorkoutPreview({title}) {
    const [optionsOpen, setOptionsOpen] = useState(false);

    const handleOpenWorkoutOptions = () => {
        setOptionsOpen(true);
    }
    const handleCloseWorkoutOptions = () => {
        setOptionsOpen(false);
    }

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={optionsOpen}
                onRequestClose={handleCloseWorkoutOptions}
            >
                <View style={styles.modalWrapper}>
                    <AppButton style={styles.modalOptions} title="Set workout"/>
                    <AppButton style={styles.modalOptions} title="Remove workout"/>
                </View>
            </Modal>
            <View style={styles.subContainer}>
                <Text style={[styles.title, styles.text]}>Todays workout</Text>
                <AppButton onPress={handleOpenWorkoutOptions} color="black" style={styles.optionsBtn} icon="dots-vertical"/>
            </View>
            <Text style={[styles.subTitle, styles.text]}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginVertical: 10
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    modalWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(200,200,200,0.8)",
        position: "relative"
    },
    modalOptions: {
        width: 200
    },  
    modalClose: {
        backgroundColor: "transparent",
        position: "absolute",
        bottom: "100%",
        left: -15 //what
    },
    optionsBtn: {
        backgroundColor: "transparent",
        right: 0,
        marginVertical: 0
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