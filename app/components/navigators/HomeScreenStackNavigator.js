import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import DayOverview from "../../screens/DayOverviewScreen";
import HomeScreen from "../../screens/HomeScreen";
import routes from "./routes";
import CalendarScreen from '../../screens/CalendarScreen';
import AddWorkoutScreen from '../../screens/AddWorkoutScreen';
import AddNutritionsScreen from '../../screens/AddNutritionsScreen';
import NewNutrition from '../nutrition/NewNutrition';
import NewNutritionScreen from '../../screens/NewNutritionScreen';
import NewExcercise from '../workout/NewExcercise';
import AddExcerciseScreen from '../../screens/AddExcerciseScreen';

const Stack = createStackNavigator();

export default function HomeScreenNavigatorStack () {
    return (
        <Stack.Navigator initialRouteName={routes.HOME}>
            <Stack.Screen name={routes.HOME} options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name={routes.DAY_OVERVIEW} options={{headerTitle: "Day overview"}} component={DayOverview}/>
            <Stack.Screen name={routes.CALENDAR} options={{headerShown: false}} component={CalendarScreen}/>
            <Stack.Screen name={routes.ADD_NUTRITION_PLAN} options={{headerShown: false}} component={AddNutritionsScreen}/>
            <Stack.Screen name={routes.ADD_WORKOUT} options={{headerShown: false}} component={AddWorkoutScreen}/>
            <Stack.Screen name={routes.ADD_NEW_NUTRITION} options={{headerShown: false}} component={NewNutritionScreen}/>
            <Stack.Screen name={routes.ADD_NEW_EXCERCISE} options={{headerShown: false}} component={AddExcerciseScreen}/>
        </Stack.Navigator>
    )
}