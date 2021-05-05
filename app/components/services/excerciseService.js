import 'react-native-get-random-values';
import {storeData, getData} from "./storeService";
import shortId from "shortid";

const KEY = "EXCERCISES";

export const addExcercise = async (data) => {
    let allExcercises = await getExcercises();
    if (!allExcercises) allExcercises = []

    allExcercises.push({...data, id: shortId.generate()})
    await saveExcercise(allExcercises);

    return allExcercises;

}

export const saveExcercise = data => {
    return storeData(data, KEY);
}

export const getExcercises = () => {
    return getData(KEY);
}