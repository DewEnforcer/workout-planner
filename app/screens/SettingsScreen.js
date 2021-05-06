import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppForm from '../components/forms/Form';
import AppFormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';
import { getSettings, saveSettings } from '../components/services/settingsService';
import { resetWorkoutTypes } from '../components/services/workoutTypeService';

import defaultStyles from "../config/styles";

export default function SettingsScreen() {

    const [settings, setSettings] = useState();

    const getSettingsData = async () => {
        const settingsData = await getSettings();
        setSettings(settingsData)
    }

    useEffect(() => {
        getSettingsData();
    }, [])

    const handleSaveSettings = async data => {
        await saveSettings(data);
        setSettings(data);
    }

    const handleResetWorkoutTypes = async => {
        resetWorkoutTypes();
    }

    return (
        <Screen>
            <Text style={defaultStyles.headerText}>Settings</Text>
            {settings && (
            <AppForm
                initialValues={{
                    weight: settings.weight
                }}
                onSubmit={handleSaveSettings}
            >
                <AppFormField name="weight" placeholder="Enter your weight..."/>
                <SubmitButton title="Save"/>
            </AppForm>
            )}
            <View>
                <AppButton title="Reset workout types" onPress={handleResetWorkoutTypes}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
container: {

},
});