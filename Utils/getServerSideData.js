import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getServerSidePropsWithData = (queryUrl) => {
  return async (context) => {
    // Ensure protocol is included in fullUrl
    const protocol = context.req.headers['x-forwarded-proto'] || 'https';
    const host = context.req.headers.host;
    const url = context.req.url;
    
    const fullUrl = `${protocol}://${host}${url}`;
    
    const aboutUsData = await fetchData(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${queryUrl}`
    );

    return {
      props: {
        Data: aboutUsData || [],
        fullUrl,
      },
    };
  };
};
