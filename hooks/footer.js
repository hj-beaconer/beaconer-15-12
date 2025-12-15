import axios from "axios";
import { FooterQuary } from "../Utils/endpoint";

const useFooter = () => {
  const getfooter = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${FooterQuary}`
    );
    return response;
  };

  return {
    getfooter,
  };
};

export default useFooter;
