import React from "react";

export function useVModel(defaultValue = "") {
  let [value, setValue] = React.useState(defaultValue);

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange,
  };
}

export default useVModel;
