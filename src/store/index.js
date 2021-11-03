import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, n) { // 在mutation中，传入除了state的额外参数，称为mutation的载荷。在methods里使用commit提交mutation时触发一个类型为increment的mutation（突变），要同时传入increment的实参。
      state.count += n
    }
  },
  actions: { // Action 可以包含任意异步操作。
  },
  modules: {
  }
})
