import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { timeConverter } from '../../utils/dateUtils';

import AppForm from '../forms/Form';
import TemplatePicker from "../TemplatePicker";
import SubmitButton from '../forms/SubmitButton';
import NewWorkout from '../workout/NewWorkout';
import NewNutrition from '../nutrition/NewNutrition';
import { addNutrition, getAllNutritions } from '../services/nutritionsService';
import { useState } from 'react/cjs/react.development';
import { addWorkout, getWorkouts } from '../services/workoutService';
import { getAllNutritionPlans } from '../services/nutritionPlanService';
import { getAllPlans } from '../services/dayService';

import defaultStyles from "../../config/styles";


export default function DaySetter({day, onSubmit}) {

    const [workouts, setWorkouts] = useState([]);
    const [nutritions, setNutritions] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState({
        workout_tmp: null,
        nutrition_tmp: null
    });
    const [isLoading, setIsLoading] = useState(true);

    const handleNewNutrition = async data => {
        const newNutritions = await addNutrition(data);
        setNutritions(newNutritions);
    }

    const handleNewWorkout = async data => {
        const newWorkouts = await addWorkout(data);
        setWorkouts(newWorkouts);
    }

    const getDayPlan = async () => {
        const data = await getAllPlans();
        if (data[day.dateString]) setSelectedPlan(data[day.dateString]);
    }

    const getWorkoutsData = async () => {
        const workoutsData = await getWorkouts();
        if (workoutsData) setWorkouts(workoutsData);
    }
    const getNutrition = async () => {
        const nutrData = await getAllNutritionPlans();
        if (nutrData) setNutritions(nutrData);
    }

    const getDataInitialiazer = async () => {
        await getDayPlan();
        await getWorkoutsData();
        await getNutrition();

        setIsLoading(false);
    }

    useEffect(() => {
        getDataInitialiazer();
    }, [])

    return (
        <View>
            <Text style={defaultStyles.headerText}>{timeConverter(day.timestamp)}</Text>
            {!isLoading && <AppForm
                initialValues={selectedPlan}
                onSubmit={onSubmit}
            >
                <TemplatePicker placeholder="Select your workout.." data={workouts} ModalChild={NewWorkout} modalChildOnSubmit={handleNewWorkout} numberOfColumns={1} name="workout_tmp"/>
                <TemplatePicker placeholder="Select your nutritions.." data={nutritions} ModalChild={NewNutrition} modalChildOnSubmit={handleNewNutrition} numberOfColumns={1} name="nutrition_tmp"/>
                <SubmitButton title="Save"/>
            </AppForm>}
        </View>
    );
}

const styles = StyleSheet.create({
container: {

},
});