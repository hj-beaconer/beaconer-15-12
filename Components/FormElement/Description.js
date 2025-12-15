import React from "react";
import style from "./form.module.css"

const Description = ({ text, className }) => {
  return (
    <>
      <p className={`${style.Description} ${className}`}>{text}</p>
    </>
  );
};

export default Description;
