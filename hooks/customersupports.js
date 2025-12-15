import axios from "axios";
import { CustomerSupportQuary } from "../Utils/endpoint";

const useCustomer = () => {
  const getcustomer = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${CustomerSupportQuary}`
    );
    return response;
  };

  return {
    getcustomer,
  };
};

export default useCustomer;
