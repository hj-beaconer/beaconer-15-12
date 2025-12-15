
import axios from "axios";
import { cybersecurityPageQuary } from "../Utils/endpoint";

const usecybersecurity = () => {
  const getcybersecurity = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}${cybersecurityPageQuary}`);
    return response;
  };

  return {
    getcybersecurity,
  };
};

export default usecybersecurity;
