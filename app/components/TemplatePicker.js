import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";

import Picker from "./Picker";
import ErrorMessage from "./forms/ErrorMessage";

function TemplatePicker({
  data,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([{value: 0, label: "+Add"}, ...data])
  }, [])

  const handleOnSelectItem = item => {
    if (item.value === 0) return console.log("Add item");
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
    </>
  );
}

export default TemplatePicker;
