import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  const navigateTo = (path) => {
    if (path) {
      router.push(path);
    } else {
      console.error("Path is required to navigate.");
    }
  };

  return navigateTo;
};
