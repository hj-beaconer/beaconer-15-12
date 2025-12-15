import React from "react";
import style from "./form.module.css";

const SubLable = ({ text, className, onClick }) => {
  return (
    <>
      <p className={`${style.SubLableText} ${className}`} onClick={onClick}>
        {text}
      </p>
    </>
  );
};

export default SubLable;
