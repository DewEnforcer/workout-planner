import {storeData, getData} from "./storeService";
import shortid from "shortid"

const KEY = "NUTRITION_PLANS"

export const addNutritionPlan = async (data) => {
    let allNutritions = await getAllNutritionPlans();
    if (!allNutritions) allNutritions = []

    allNutritions.push({...data, id: shortid.generate()})
    await saveNutritionPlans(allNutritions);

    return allNutritions;

}
export const getAllNutritionPlans = () => getData(KEY);

export const saveNutritionPlans = data => storeData(data, KEY);
