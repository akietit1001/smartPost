import axiosClient from "./axiosClient";

const userApi = {
  signIn: async (params) => {
    const url = '/login';
    const response = await axiosClient.post(url, {}, {
      auth: params
    })
    if(response.data) {
      const token = response.data.token
      localStorage.setItem("token", token);
      return response.data
    }
  },

  createUser: async (params) => {
    const url = '/api/user/create'
    const response = await axiosClient.post(url, params)
    if(response.data) {
      return response.data
    }
  },

  updateName: async (id, params) => {
    const url = `/api/user/update-name/${id}`
    const response = await axiosClient.put(url, params)
    if(response.data) {
      return response.data
    }
  },

  updateEmail: async (id, params) => {
    const url = `/api/user/update-email/${id}`
    const response = await axiosClient.put(url, params)
    if(response.data) {
      return response.data
    }
  },

  updatePassword: async (id, params) => {
    const url = `/api/user/update-password/${id}`
    const response = await axiosClient.put(url, params)
    if (response.data) {
      return response.data
    }
  },
}

export default userApi;