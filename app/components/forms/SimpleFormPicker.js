import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListEmptyComponent from '../lists/ListEmptyComponent';
import PickerItem from '../PickerItem';

export default function SimpleFormPicker({name, items, numColumns=1,onItemSelect}) {

    const { values, setValues } = useFormikContext();

    const handleItemSelect = (item) => {
        if (item.id === 0) return onItemSelect(item); //would otherwise select add new placeholders
        setValues({
            ...values,
            [name]: [...values[name], item]
        })
        onItemSelect(item);
    }


    return (
        <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        ListEmptyComponent={ListEmptyComponent}
        renderItem={({ item }) => (
        <PickerItem
            item={item}
            label={item.label}
            onPress={() => handleItemSelect(item)}
        />
        )}
    />
    );
}

const styles = StyleSheet.create({
container: {

},
});