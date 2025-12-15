import axios from "axios";
import { CuttingEdgePageQuary } from "../Utils/endpoint";

const useCuttingEdge = () => {
  const getcuttingedge = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${CuttingEdgePageQuary}`
    );
    return response;
  };

  return {
    getcuttingedge,
  };
};

export default useCuttingEdge;
