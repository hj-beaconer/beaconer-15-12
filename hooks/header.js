import axios from "axios";
import { HeaderQuary } from "../Utils/endpoint";

const useHeader = () => {
  const getheader = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${HeaderQuary}`
    );
    return response;
  };

  return {
    getheader,
  };
};

export default useHeader;
