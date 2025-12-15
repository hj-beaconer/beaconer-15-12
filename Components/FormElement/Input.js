'use client'
import React from "react";
import Style from "./form.module.css";

const Input1 = ({
  placeholder,
  value,
  setValue,
  name,
  onBlur,
  disable,
  className,
}) => {
  return (
    <input
      type="text"
      className={`${Style.input} ${className}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={(e) => setValue(e)}
      onBlur={onBlur}
      disabled={disable}
      autoComplete="off"
    />
  );
};

export default Input1;
