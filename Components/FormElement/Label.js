import React from "react";
import style from "./form.module.css"

const Lable = ({ text, className }) => {
  return (
    <>
      <p className={`${style.LableText} ${className}`}>{text}</p>
    </>
  );
};

export default Lable;
