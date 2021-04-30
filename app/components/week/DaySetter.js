import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { timeConverter } from '../../utils/dateUtils';
import AppForm from '../forms/Form';
import AppFormPicker from '../forms/FormPicker';
import PickerItem from '../PickerItem';
import TemplatePicker from "../TemplatePicker";
import defaultStyles from "../../config/styles";
import SubmitButton from '../forms/SubmitButton';

const workouts = [
    {value: 1, label: "Extreme workout"},
    {value: 2, label: "Standard workout"},
]
const nutritions = [
    {value: 1, label: "Eggs day"},
    {value: 2, label: "Raw meat day"},
]

export default function DaySetter({day, onSubmit}) {
    console.log(day);

    return (
        <View>
            <Text style={defaultStyles.headerText}>{timeConverter(day.timestamp)}</Text>
            <AppForm
                initialValues={
                    {
                        workout_tmp: null,
                        nutrition_tmp: null
                    }
                }
                onSubmit={onSubmit}
            >
                <TemplatePicker placeholder="Select your workout.." data={workouts} numberOfColumns={1} name="workout_tmp"/>
                <TemplatePicker placeholder="Select your nutritions.." data={nutritions} numberOfColumns={1} name="nutrition_tmp"/>
                <SubmitButton title="Save"/>
            </AppForm>
        </View>
    );
}

const styles = StyleSheet.create({
container: {

},
});