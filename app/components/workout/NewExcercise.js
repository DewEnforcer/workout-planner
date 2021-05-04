import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppForm from '../forms/Form';
import AppFormField from '../forms/FormField';
import SubmitButton from '../forms/SubmitButton';

export default function NewExcercise({onSubmit}) {
    return (
        <AppForm
            initialValues={
                {
                    label: "",
                }
            }
            onSubmit={(data, {resetForm}) => {
                onSubmit(data);
                resetForm();
            }}
        >
            <AppFormField name="label" placeholder="Enter the excercise name.."/>
            <SubmitButton title="Save"/>
        </AppForm>
    );
}

const styles = StyleSheet.create({
container: {

},
});