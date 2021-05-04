import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from '../forms/Form';
import AppFormField from '../forms/FormField';
import SubmitButton from '../forms/SubmitButton';
import AppTimePicker from '../forms/TimePicker';

export default function NewNutrition({onSubmit}) {
    return (
        <AppForm
            initialValues={
                {
                    label: "",
                    time_str: "",
                    grams: null
                }
            }
            onSubmit={(data, {resetForm}) => {
                onSubmit(data);
                resetForm();
            }}
        >
            <AppFormField name="label" placeholder="Enter the nutrition name.."/>
            <AppFormField name="grams" placeholder="Protein in grams..."/>
            <AppTimePicker name="time_str"/>
            <SubmitButton title="Save"/>
        </AppForm>
    );
}

const styles = StyleSheet.create({
container: {

},
});