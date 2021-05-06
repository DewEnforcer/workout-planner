import {storeData, getData} from "./storeService";

const KEY = "DAY";

export const saveDayPlan = async (keyDate, data) => {
    let planData = await getAllPlans();
    if (!planData) planData = {};

    if (keyDate in planData === true) planData[keyDate] = data;
    else planData = {...planData, [keyDate]: data};

    return console.log(planData);

    await saveAllPlans(planData);

    return planData;
}

export const getAllPlans = () => getData(KEY);

export const saveAllPlans = () => storeData(KEY);