import {storeData, getData} from "./storeService";

const KEY = "WORKOUT_PLAN";

export const saveWorkout = data => {
    return storeData(data, KEY);
}

export const getWorkouts = () => {
    return getData(KEY);
}