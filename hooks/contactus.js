import axios from "axios";
import { ContactUsPageQuary } from "../Utils/endpoint";

const useContactUs = () => {
  const getcontactus = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${ContactUsPageQuary}`
    );
    return response;
  };

  return {
    getcontactus,
  };
};

export default useContactUs;
