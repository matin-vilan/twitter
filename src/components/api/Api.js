import axios from "axios";

export const getAxiosInstanceApi = () => {
  return axios.create({
    baseURL: "https://twitterapi.liara.run/api/",
    headers: {
      "x-auth-token": localStorage.getItem("x-auth-token"),
    },
  });
};
