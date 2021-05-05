import shortid from "shortid";
import {storeData, getData} from "./storeService";

const KEY = "WORKOUT_PLAN";

export const addWorkout = async (data) => {
    let allWorkouts = await getWorkouts();
    if (!allWorkouts) allWorkouts = []

    allWorkouts.push({...data, id: shortid.generate()})
    await saveWorkout(allWorkouts);

    return allWorkouts;

}

export const saveWorkout = data => {
    return storeData(data, KEY);
}

export const getWorkouts = () => {
    return getData(KEY);
}