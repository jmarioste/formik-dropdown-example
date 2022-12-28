import { useField, useFormikContext } from "formik";
import React from "react";
import CustomDropdown, { CustomDropdownOption } from "./CustomDropdown";
type Props<T> = {
  name: string;
  options: CustomDropdownOption<T>[];
};
const FormikCustomDropdown = <T,>(props: Props<T>) => {
  const name = props.name;
  const [field] = useField<T>(name);
  const { setFieldValue } = useFormikContext();
  // 👇 listen to any change in value and use setFieldValue
  // to modify the formik context state
  const handleChange = (val: T) => {
    setFieldValue(name, val);
  };
  return (
    <CustomDropdown
      options={props.options}
      onChange={handleChange}
      value={field.value}
    />
  );
};
export default FormikCustomDropdown;
