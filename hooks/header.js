import axios from "axios";
import { HeaderQuary } from "../Utils/endpoint";

const useHeader = () => {
  const getheader = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${HeaderQuary}`
    );
    console.log("BACKEND:", process.env.NEXT_PUBLIC_BACKEND_URL);
console.log("FRONTEND:", process.env.NEXT_PUBLIC_FRONTEND_URL);

    return response;
  };

  return {
    getheader,
  };
};

export default useHeader;
