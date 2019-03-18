import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('.', true, /Module\.js$/)
let modules = {}
// console.log(files.keys(), files("./modules/homeModule.js"))
try {
  files.keys().forEach(path => {
    if (path.indexOf('Module.js') !== -1) {
      let modu = files(path).default
      if (modu) {
        modules[path.split('/').pop().replace(/(\.\/|\.js)/g, '')] = modu
      } else {
        console.error(`${path.split('/').pop()}modules加载失败`)
      }
    }
  })
} catch (e) {
  console.error('store加载失败', e)
}

export default new Vuex.Store({
  state: {
    count: 0,
    obj: {
      name: 'wzd',
      age: 27
    }
  },
  mutations: {
    increment (state, p) {
      state.count = state.count + p
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment', 10)
    }
  },
  modules
})