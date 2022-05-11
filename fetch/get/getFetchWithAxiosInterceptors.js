import React, { useEffect, useState } from "react";
import axios from "axios";
const getFetchWithAxiosInterceptors = (url) => {
  let returnData;
  let returnToken;
  axios.interceptors.request.use(
    (config) => {
      const { title } = returnToken;
      const httpOnlyToken = title;
      console.log("httpOnlyToken: ", httpOnlyToken);

      if (httpOnlyToken) {
        config.headers.Authorization = `Bearer ${httpOnlyToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  const fetchToken = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const token = await data.json();
    returnToken = token;
  };
  const fetchGetRequest = async (url) => {
    try {
      if (url) {
        const data = await axios.get(url);
        returnData = data;
        return;
      }
      console.log("Url is empty");
    } catch (error) {
      console.log("Error", error);
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
