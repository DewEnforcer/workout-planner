import 'react-native-get-random-values';
import {storeData, getData} from "./storeService";
import { v4 as uuidv4 } from 'uuid';

const KEY = "NUTRITIONS"

export const addNutrition = async (data) => {
    let allNutritions = await getAllNutritions();
    if (!allNutritions) allNutritions = []

    allNutritions.push({...data, id: uuidv4()})
    await saveNutritions(allNutritions);

    return allNutritions;

}
export const getAllNutritions = () => getData(KEY);

export const saveNutritions = data => storeData(data, KEY);
