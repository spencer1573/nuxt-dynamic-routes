import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      people: []
    },
    getters: {
      people: state => state.people
    },
    actions: {
      loadPeopleList: function ({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
          commit('SET_PEOPLE_LIST', { list: response.data })
        }, (err) => {
          console.log(err)
        })
      }
    },
    mutations: {
      SET_PEOPLE_LIST: (state, { list }) => {
        state.people = list
      }
    }
  })
}
export default store
