import {storeData, getData} from "./storeService";

const KEY = "DAY";

export const saveDayPlan = async (keyDate, data) => {
    let planData = await getAllPlans();
    if (!planData) planData = {};

    if (keyDate in planData === true) planData[keyDate] = data;
    else planData = {...planData, [keyDate]: data};

    const res = await saveAllPlans(planData);
    return planData;
}

export const getAllPlans = () => getData(KEY);

export const saveAllPlans = (data) => storeData(data, KEY);

export const createCurrentDateKey = () => {
    const d = new Date();
    const month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}` : d.getMonth()+1;
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    return `${d.getFullYear()}-${month}-${day}`;
}