const business = {
  state: {
    formData: {
      fieldOne: '',
      fieldTwo: ''
    }
  },
  mutations: {
    SET_FORMDATA: (state, formData) => {
      state.formData = formData
    }
  },
  actions: {
    SetFormData({ commit }, formData) {
      commit('SET_FORMDATA', formData)
    }
  }
}

export default business
