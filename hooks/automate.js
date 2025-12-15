import axios from "axios";
import { AutomatePageQuary } from "../Utils/endpoint";

const useAutomate = () => {
  const getAutomate = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${AutomatePageQuary}`
    );
    return response;
  };

  return {
    getAutomate,
  };
};

export default useAutomate;
