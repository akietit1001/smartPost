import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', {
  state: () => ({
    currentUser: {},
    key: 0
  }),

  getters: {
    getterCurrentUser: (state) => state.currentUser,
  },

  actions: {
    async updateCurrentUser(data) {
      try {
        this.currentUser = await data
      } catch (error) {
        console.log(error)
      }
    }
  }


})