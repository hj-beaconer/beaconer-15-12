import axios from "axios";
import {ResourcePageQuary1 } from "../Utils/endpoint";

const useResources = () => {
  const getresources = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${ResourcePageQuary1}`
    );
    return response;
  };

  return {
    getresources,
  };
};

export default useResources;
