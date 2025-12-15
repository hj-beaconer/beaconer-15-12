import axios from "axios";
import {  TemplateQuary } from "../Utils/endpoint";

const useTemplates = () => {
  const gettemplates = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${TemplateQuary}`
    );
    return response;
  };

  return {
    gettemplates,
  };
};

export default useTemplates;
