import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 30000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
  },
});

const fetchDataDetails = async (id) => {
  const { data } = await http.get(`3/movie/${id}?language=en-US`);
  return data;
};

export { fetchDataDetails };
