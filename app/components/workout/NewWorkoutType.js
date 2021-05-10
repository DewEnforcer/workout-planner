import React from 'react';
import { StyleSheet } from 'react-native';

import AppForm from '../forms/Form';
import AppFormField from '../forms/FormField';
import SubmitButton from '../forms/SubmitButton';

export default function NewWorkoutType({onSubmit}) {
    return (
        <AppForm
            initialValues={{
                label: "",
                value: ""
            }}

            onSubmit={onSubmit}
        >
            <AppFormField name="label" placeholder="Name your workout type..."/>
            <AppFormField name="value" placeholder="Enter protein multiplier..."/>
            <SubmitButton title="Save"/>
        </AppForm>
    );
}

const styles = StyleSheet.create({
container: {

},
});