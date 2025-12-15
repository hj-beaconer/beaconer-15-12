import axios from "axios";
import { RapidPageQuary } from "../Utils/endpoint";

const useRapid = () => {
  const getrapid = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${RapidPageQuary}`
    );
    return response;
  };

  return {
    getrapid,
  };
};

export default useRapid;
