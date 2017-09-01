import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      todos: ['yest', 'aoisd', 'aosidf']
    },
    getters: {
      todos: state => state.todos
    },
    actions: {
      setTodos ({ commit }, value) {
        commit('SET_TODOS', value)
      }
    },
    mutations: {
      SET_TODOS: (state, value) => {
        state.value = value
      }
    }
  })
}
export default store
