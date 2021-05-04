import { useFormikContext } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import ItemInput from './ItemInput';


export default function ItemInputList({name, onSelectItem, onRemoveItem}) {


    const { values } = useFormikContext();    

    return (
        <>
            <ItemInput icon="plus" onPress={onSelectItem}/>
            {values[name].map(i => <ItemInput key={i.id.toString()} onDelete={onRemoveItem} id={i.id} label={i.label}/>)}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 300
    },
});