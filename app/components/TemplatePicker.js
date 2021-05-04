import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import Picker from "./Picker";
import ErrorMessage from "./forms/ErrorMessage";
import { Modal } from "react-native";

function TemplatePicker({
  data,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
  ModalChild = null,
  modalChildOnSubmit
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0 || items[0].value !== 0) { //prevent duplication
      const newItems = [{value: 0, label: "+Add"}, ...data]; 
      setItems(newItems);
    }
    console.log(items);
  }, [])

  const handleOnSelectItem = item => {
    if (item.value === 0) { //pressed add
      if (ModalChild) return setModalVisible(true);
    }
    setFieldValue(name, item);
  }

  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={handleOnSelectItem}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <ModalChild onSubmit={data => {
          modalChildOnSubmit(data);
          setModalVisible(false);
        }}/>
      </Modal>
    </>
  );
}

export default TemplatePicker;
