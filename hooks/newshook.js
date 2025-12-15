import axios from "axios";
import { NewsQuary } from "../Utils/endpoint";

const useNews = () => {
  const getnews = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${NewsQuary}`
    );
    return response;
  };

  return {
    getnews,
  };
};

export default useNews;
