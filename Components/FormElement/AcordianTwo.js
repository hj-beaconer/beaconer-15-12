// components/Accordion.js
import React, { useState } from "react";
import style from "./form.module.css";
import DescriptionSolution from "./DescriptionSolution.js";


const AccordionItem = ({ title, content, solution, isOpen, onToggle, svg }) => (
  <div className={`transition-transform duration-300  ${
    isOpen ? "bg-white" : ""} ${style.second_acord_main}`}>
    <button className={style.second_div_acordiyan_button} onClick={onToggle}>
      <div className={style.second_heading}>
        {/* <div className={style.svg_acordiyan}>{svg}</div> */}
        {title}
      </div>
      <span
        className={`transition-transform duration-300 fs-1 ${
          isOpen ? "d-none" : ""
        }`}
      >
        +
      </span>
      <span
        className={`transition-transform duration-300 fs-1 ${
          isOpen ? "" : "d-none"
        }`}
      >
        -
      </span>
    </button>
    {isOpen && (
      <div className={style.second_div_for_description_content}>
        <DescriptionSolution text={content} solution={solution} />
      </div>
    )}
  </div>
);

const AccordionTwo = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div className={style.second_acordian_main} key={index}>
          <AccordionItem
            key={index}
            title={item.Solution_Feature_Section_Accordion_Main_Heading}
            // solution={item.solution}
            content={item.Solution_Feature_Section_Accordion_Main_Description}
            svg={item.svg}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default AccordionTwo;
