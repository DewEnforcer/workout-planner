import shortid from "shortid";
import {storeData, getData} from "./storeService";

const KEY = "WORKOUT_TYPE";

export const addWorkoutType = async data => {
    let allTypes = await getWorkoutTypes();
    allTypes.push({...data, id: shortid.generate()});
    await saveWorkoutType(allTypes);

    return allTypes
}

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

export const resetWorkoutTypes = () => {
    saveWorkoutType([]);
}

const createDefaultTypes = () => {};