import 'react-native-get-random-values';
import {storeData, getData} from "./storeService";
import shortid from "shortid"

const KEY = "NUTRITIONS"

export const addNutrition = async (data) => {
    let allNutritions = await getAllNutritions();
    if (!allNutritions) allNutritions = []

    allNutritions.push({...data, id: shortid.generate()})
    await saveNutritions(allNutritions);

    return allNutritions;

}
export const getAllNutritions = () => getData(KEY);

export const saveNutritions = data => storeData(data, KEY);

export const removeAllNutritions = () => storeData([], KEY);