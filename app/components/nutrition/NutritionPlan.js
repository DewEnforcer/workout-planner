import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import AppForm from '../forms/Form';
import AppFormField from '../forms/FormField';
import ItemInputList from '../forms/ItemInputList';
import SimpleFormPicker from '../forms/SimpleFormPicker';
import SubmitButton from '../forms/SubmitButton';
import AppTimePicker from '../forms/TimePicker';

const nutritions = [
    {id: 1, label: "Protein shake"},
    {id: 2, label: "Tvaroho"},
    {id: 3, label: "Proteino bar"},
]

export default function NutritionPlan({onSubmit}) {

    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = (data, {resetForm}) => {
        onSubmit(data);
        resetForm();
    }

    const handleRemoveNutr = (values, func, id) => {
        func({
            ...values,
            nutritions: values.nutritions.filter((item) => item.id !== id)
        })
    }

    return (
        <AppForm
            initialValues={
                {
                    label: "",
                    nutritions: []
                }
            }
            onSubmit={handleSubmit}
        >
            <AppFormField name="label" placeholder="Nutrition plan name.."/>
            <ItemInputList name="nutritions" onRemoveItem={handleRemoveNutr} onSelectItem={() => setModalVisible(true)}/>
            <SubmitButton title="Save"/>
            <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>    
                <SimpleFormPicker
                    name="nutritions"
                    items={nutritions}
                    onItemSelect={() => setModalVisible(false)}
                />
            </Modal>
        </AppForm>
    );
}

const styles = StyleSheet.create({
container: {

},
});