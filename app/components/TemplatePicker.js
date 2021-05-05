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

  const handleOnSelectItem = item => {
    if (item.id === 0) { //pressed add
      if (ModalChild) return setModalVisible(true);
    }
    setFieldValue(name, item);
  }

  return (
    <>
      <Picker
        items={data}
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
