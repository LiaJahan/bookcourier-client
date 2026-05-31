import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    "https://bookcourier-server-4mi1.onrender.com",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;