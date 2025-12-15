import axios from "axios";
import { WebinarQuary } from "../Utils/endpoint";

const useWebinars = () => {
  const getwebinars = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${WebinarQuary}`
    );
    return response;
  };

  return {
    getwebinars,
  };
};

export default useWebinars;
