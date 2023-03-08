import axiosClient from "./axiosClient";

export const adminApi = {
  getAdmin: async (url) => {
    return axiosClient.get(url);
  }
}