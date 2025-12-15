import axios from "axios";
import { AboutUsPageQuary } from "../Utils/endpoint";

const useAboutUs = () => {
  const getaboutus = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${AboutUsPageQuary}`
    );
    return response;
  };

  return {
    getaboutus,
  };
};          

export default useAboutUs;
