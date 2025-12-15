import axios from "axios";
import { SolutionPageQuary } from "../Utils/endpoint";

const useSolution = () => {
  const getsolution = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${SolutionPageQuary}`
    );
    return response;
  };

  return {
    getsolution,
  };
};

export default useSolution;
