import React from "react";
import { Listbox } from "@headlessui/react";
import cn from "classnames";
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
    <Listbox value={props.value} onChange={props.onChange} as={React.Fragment}>
      <div className={"dropdown dropdown-end w-full"}>
        {/* 👇 Classes for button */}
        <Listbox.Button className="btn btn-outline w-full relative no-animation normal-case">
          {label}
        </Listbox.Button>
        {/* 👇 Classes for options */}
        <Listbox.Options
          className={cn({
            "dropdown-content menu": true,
            "p-2 shadow-lg bg-base-100 rounded-box w-52": true,
          })}
        >
          {options.map((option, i) => (
            <Listbox.Option key={i} value={option.value}>
              {/* 👇 Use render props to get active, disabled and selected state */}
              {({ active, disabled, selected }) => (
                <button
                  className={cn({
                    active: selected,
                    "btn-disabled": disabled,
                    "bg-primary/80 text-primary-content": active,
                  })}
                >
                  {option.label}
                </button>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};
export default CustomDropdown;
