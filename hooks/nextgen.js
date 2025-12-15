import axios from "axios";
import { NextGenPageQuary } from "../Utils/endpoint";

const useNextGen = () => {
  const getnextgen = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${NextGenPageQuary}`
    );
    return response;
  };

  return {
    getnextgen,
  };
};

export default useNextGen;
