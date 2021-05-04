import React, { useState } from 'react';
import { Modal, StyleSheet} from 'react-native';
import AppForm from '../forms/Form';
import AppFormField from '../forms/FormField';
import AppFormPicker from '../forms/FormPicker';
import ItemInputList from '../forms/ItemInputList';
import SimpleFormPicker from '../forms/SimpleFormPicker';
import SubmitButton from '../forms/SubmitButton';

const excercises = [
    {id: 1, label: "Barbell Bent Over Row"},
    {id: 2, label: "Pullups"},
    {id: 3, label: "Dumbbell Alternate Hammer Curl"},
]

export default function NewWorkout({onSubmit}) {

    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = (data, {resetForm}) => {
        onSubmit(data);
        resetForm();
    }

    const handleRemoveExcercise = (values, func, id) => {
        func({
            ...values,
            excercises: values.excercises.filter((item) => item.id !== id)
        })
    }

    return (
        <>
        <AppForm
            initialValues={
                {
                    label: "",
                    workout_typeId: null,
                    excercises: []
                }
            }
            onSubmit={handleSubmit}
        >
            <AppFormField name="label" placeholder="Enter the workout title.."/>
            <AppFormPicker name="workout_typeId" items={[]} placeholder="Select workout difficulty..."/>
            <ItemInputList name="excercises" onRemoveItem={handleRemoveExcercise} onSelectItem={() => setModalVisible(true)}/>
            <SubmitButton title="Save"/>
            <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>    
                <SimpleFormPicker
                    name="excercises"
                    items={excercises}
                    onItemSelect={() => setModalVisible(false)}
                />
            </Modal>
        </AppForm>
        </>
    );
}

const styles = StyleSheet.create({
container: {

},
});