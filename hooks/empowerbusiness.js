import axios from "axios";
import { RapidAssessmentPageQuary } from "../Utils/endpoint";

const useEmpowerBusiness = () => {
  const getempowerbusiness = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${RapidAssessmentPageQuary}`
    );
    return response;
  };

  return {
    getempowerbusiness,
  };
};

export default useEmpowerBusiness;
