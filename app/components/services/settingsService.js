import {storeData, getData} from "./storeService";

const KEY = "SETTINGS"

export const saveSettings = data => {
    return storeData(data, KEY);
}

export const getSettings = async () => {
    const data = await getData(KEY);
    if (!data) {
        const defaults = createDefaultSettings();
        await storeData(defaults, KEY);
        return defaults;
    }
    return getData(KEY);
}

export const createDefaultSettings = () => {
    return {
        weight: "87",
    }
}
// prot multiplier model -> key: {title: string, value: number} (no_workout: {title: "No workout", value: 1,6})