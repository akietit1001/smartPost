import axiosClient from "./axiosClient";

const adminApi = {
  getAllUser: async () => {
    const url = '/api/user/getall'
    const response = await axiosClient.get(url)
    if(response.data) {
      return response.data
    }
  }
}

export default adminApi;