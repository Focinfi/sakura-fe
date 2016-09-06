import Vue from 'vue'
import Vuex from 'vuex'
import tips from './api/tips.js'

Vue.use(Vuex)

const state = {
  mainTip: "Help you, help me",
  showNewActivity: false
}

const mutations = {
  SET_MAIN_TIP: (state, tip) => {
    state.mainTip = tip
  },

  SET_SHOW_NEW_ACTIVITY: (state) => {
    state.showNewActivity = !state.showNewActivity
  }
}

const actions = {
  FETCH_MAIN_TIP: ({commit}, {userID}) => {
    tips.fetchTip(userID).then(res => {
      if (res.ok) {
        res.json().then(obj => {
          commit('SET_MAIN_TIP', obj.data)
        })
      }
    })
  },

  TOGGLE_SHOW_NEW_ACTIVITY: ({commit}) => {
    commit('SET_SHOW_NEW_ACTIVITY')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
