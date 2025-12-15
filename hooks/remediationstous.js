import axios from "axios";
import { RemediationsUsPageQuary } from "../Utils/endpoint";

const useRemediationUs = () => {
  const getremediationstous = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${RemediationsUsPageQuary}`
    );
    return response;
  };

  return {
    getremediationstous,
  };
};

export default useRemediationUs;
