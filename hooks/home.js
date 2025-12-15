import axios from "axios";
import { HomePageQuary } from "../Utils/endpoint";

const useHome = () => {
  const gethome = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${HomePageQuary}`
    );
    return response;
  };

  return {
    gethome,
  };
};

export default useHome;
