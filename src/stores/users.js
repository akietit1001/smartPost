import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    key: 0
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
    }, 
    updateUser(id, data) {
      for(let i = 0; i< this.users.length; i++) {
        if(id === this.users[i].id) {
          this.users[i].id = data
          this.key = Math.random()
          break
        }
      }
    }
  }

})