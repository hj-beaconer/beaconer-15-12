import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Resources = () => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/resources") {
      router.replace("/resources/blog");
    } else if (pathname === "/resources/template") {
      router.replace("/resources/template");
    } else if (pathname === "/resources/news") {
      router.replace("/resources/news");
    } else if (pathname === "/resources/webinar") {
      router.replace("/resources/webinar");
    }
  }, [pathname]);

  return <div></div>;
};

export default Resources;
