// components/Accordion.js
import React, { useState } from "react";
import style from "./form.module.css";
import Description from "./Description";

const AccordionItem = ({ title, content, isOpen, onToggle, svg }) => (
  <div className="border-b border-gray-900">
    <button className={style.main_div_acordiyan_button} onClick={onToggle}>
      <div className={style.main_div_for_acordiyan_svg}>
        <div className={style.svg_acordiyan}>
          <img src={svg} loading="lazy" fetchpriority="high" />
        </div>
        <span className={style.main_div_for_title}>{title}</span>
      </div>
      <span
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="1rem"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>
    {isOpen && (
      <div className={style.main_div_for_description_content}>
        <Description text={content} />
      </div>
    )}
  </div>
);

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={style.acordian_main_container}>
      {items.map((item, index) => (
        <>
          <AccordionItem
            key={index}
            title={item.Accordion_Main_Heading}
            content={item.Accordion_Description}
            svg={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Accordion_Svg.url}`}
            isOpen={openIndex === index}
            onToggle={() => toggleAccordion(index)}
          />
        </>
      ))}
    </div>
  );
};

export default Accordion;
