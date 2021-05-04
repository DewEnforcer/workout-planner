import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from '../components/forms/Form';
import AppFormField from '../components/forms/FormField';
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';

import defaultStyles from "../config/styles";

export default function SettingsScreen() {

    const [weight, setWeight] = useState();

    useEffect(() => {
        console.log("Getting weight from local storage");
    })

    const handleSaveSettings = data => {
        console.log("Saving settings", data);
    }

    return (
        <Screen>
            <Text style={defaultStyles.headerText}>Settings</Text>
            <AppForm
                initialValues={{
                    weight: weight
                }}
                onSubmit={handleSaveSettings}
            >
                <AppFormField name="weight" placeholder="Enter your weight..."/>
                <SubmitButton title="Save"/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
container: {

},
});