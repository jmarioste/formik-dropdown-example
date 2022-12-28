import React from "react";
import { Listbox } from "@headlessui/react";
//👇 generic type for dropdown option
export type CustomDropdownOption<T> = {
  label: string;
  value: T;
};
//👇 generic props
export type CustomDropdownProps<T> = {
  options: CustomDropdownOption<T>[];
  value: T;
  onChange(value: T): void;
};
//👇 generic dropdown component
const CustomDropdown = <T,>(props: CustomDropdownProps<T>) => {
  const options = props.options;
  const selectedItem = options.find((o) => o.value === props.value);
  const label = selectedItem?.label ?? "Select Option...";
  return (
    <Listbox value={props.value} onChange={props.onChange}>
      <Listbox.Button>{label}</Listbox.Button>
      <Listbox.Options>
        {options.map((option, i) => (
          <Listbox.Option key={i} value={option.value}>
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
export default CustomDropdown;
