import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_KEY_PREFIX = "WORKOUT_PLANNER_"

const createKey = key => DEFAULT_KEY_PREFIX + key;

export const storeData = async (data, key) => {
    try {
       await AsyncStorage.setItem(createKey(key), JSON.stringify(data));
       return true;
    } catch (error) {
        console.log(error + "ON STORE SERVICE");
        return false;
    }
}
export const getData = async key => {
    try {
       const data = await AsyncStorage.getItem(createKey(key));
       if (data) return JSON.parse(data);
    } catch (error) {
        console.log(error + "ON STORE SERVICE");
    }

    return null;
}