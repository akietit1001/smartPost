import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: []
  }),

  getters: {
    getterUsers: (state) => state.users,
  },

  actions: {
    fetchUsers(data) {
      try {
        this.users = data
      } catch (error) {
        console.log(error)
      }
    }
  }

})