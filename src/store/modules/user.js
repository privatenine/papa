const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    Login({ commit }) {
      commit('SET_USERINFO', '学员1')
    }
  }
}

export default user
