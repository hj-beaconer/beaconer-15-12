import axios from "axios";
import {
  FinancePageQuary,
  HealthcarePageQuary,
  LegalQuary,
  ManufactureQuary,
  RetailQuary,
  TechnologyPageQuary,
} from "../Utils/endpoint";

const useIndustries = () => {
  const gethealthcare = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${HealthcarePageQuary}`
    );
    return response;
  };
  const getfinance = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${FinancePageQuary}`
    );
    return response;
  };
  const gettechnology = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${TechnologyPageQuary}`
    );
    return response;
  };
  const getretail = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${RetailQuary}`
    );
    return response;
  };
  const getlegal = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${LegalQuary}`
    );
    return response;
  };
  const getmanufacture = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${ManufactureQuary}`
    );
    return response;
  };

  return {
    gethealthcare,
    getfinance,
    gettechnology,
    getretail,
    getlegal,
    getmanufacture
  };
};

export default useIndustries;
