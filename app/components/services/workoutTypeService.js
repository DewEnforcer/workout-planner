import {storeData, getData} from "./storeService";

const KEY = "WORKOUT_TYPE";

export const saveWorkoutType = data => {
    return storeData(data, KEY);
}

export const getWorkoutTypes = () => {
    const data = getData(KEY);
    if (!data) {
        const defaults = createDefaultTypes();
        storeData(defaults, KEY);
        return defaults;
    }
    return getData(KEY);
}

const createDefaultTypes = () => {};