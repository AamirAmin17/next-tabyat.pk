import axios from "axios";

const getFetchWithAxiosInterceptors = (url) => {
  const baseURL = "https://jsonplaceholder.typicode.com";
  let returnData;
  let returnToken;
  axios.interceptors.request.use(
    (config) => {
      const { title } = returnToken;
      const httpOnlyToken = title;
      if (httpOnlyToken) {
        config.baseURL = baseURL;
        config.headers.Authorization = `Bearer ${httpOnlyToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const fetchToken = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const token = await data.json();
    returnToken = token;
  };
  const fetchGetRequest = async (url2) => {
    try {
      if (url2) {
        const data = await axios.get(url2);
        returnData = data;
        return;
      }
    } catch (error) {
      if (error.response.status === 404) return console.log("404 error", error);
      if (error.response.status === 502)
        return console.log("Bad Gateway", error);
      if (error.response.status === 400)
        return console.log("Bad Request", error);
    }
  };
  const combineAsyncFunctions = async () => {
    await fetchToken();
    await fetchGetRequest(url);
  };
  combineAsyncFunctions();

  return returnData;
};

export default getFetchWithAxiosInterceptors;
